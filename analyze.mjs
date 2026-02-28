import fs from 'fs';

const csvPath = 'Olivenöl Konkurrenz.csv';
const csvContent = fs.readFileSync(csvPath, 'utf8');

const lines = csvContent.trim().split('\n');
const header = lines.shift();

function parseLine(line) {
    const regex = /(?:^|,)(?:"([^"]*)"|([^,]*))/g;
    let matches;
    let fields = [];
    while ((matches = regex.exec(line)) !== null) {
        if (matches.index === regex.lastIndex) regex.lastIndex++;
        fields.push(matches[1] || matches[2] || '');
    }
    return fields.slice(0, 4); // We only care about the first 4 fields
}

const records = lines.map(line => {
    const fields = parseLine(line);
    return {
        name: fields[0],
        country: fields[1],
        url: fields[2],
        desc: fields[3],
        line: line
    };
});

records.sort((a, b) => {
    const countryA = a.country.toLowerCase();
    const countryB = b.country.toLowerCase();
    if (countryA < countryB) return -1;
    if (countryA > countryB) return 1;
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
});

const newCsvLines = [header, ...records.map(r => `"${r.name.replace(/"/g, '""')}","${r.country.replace(/"/g, '""')}","${r.url}","${r.desc.replace(/"/g, '""')}"`)];
fs.writeFileSync(csvPath, newCsvLines.join('\n'));
console.log('CSV sorted and saved.');

async function analyzeUrls() {
    console.log('Starting URL analysis...');
    const results = [];
    
    const batchSize = 10;
    for (let i = 0; i < records.length; i += batchSize) {
        const batch = records.slice(i, i + batchSize);
        const promises = batch.map(async (record) => {
            try {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 8000);
                
                const response = await fetch(record.url, { 
                    signal: controller.signal,
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
                    }
                });
                clearTimeout(timeoutId);
                
                if (!response.ok) {
                    return { name: record.name, country: record.country, url: record.url, status: response.status, error: 'HTTP error' };
                }
                
                const html = await response.text();
                
                const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
                const title = titleMatch ? titleMatch[1].trim() : '';
                
                const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i) || 
                                  html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*name=["']description["'][^>]*>/i);
                const description = descMatch ? descMatch[1].trim() : '';
                
                const h1Matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ')).filter(t => t);
                
                const textLower = html.toLowerCase();
                const hasBio = textLower.includes('bio') || textLower.includes('organic') || textLower.includes('biologisch');
                const hasKanister = textLower.includes('kanister') || textLower.includes('5l') || textLower.includes('5 liter') || textLower.includes('latta') || textLower.includes('tin');
                const hasAbo = textLower.includes('abo ') || textLower.includes('abonnement') || textLower.includes('subscribe');
                const hasAwards = textLower.includes('award') || textLower.includes('auszeichnung') || textLower.includes('gewinner') || textLower.includes('testsieger') || textLower.includes('premio');
                const hasB2B = textLower.includes('b2b') || textLower.includes('großhandel') || textLower.includes('händler') || textLower.includes('wholesale');
                
                return {
                    name: record.name,
                    country: record.country,
                    url: record.url,
                    title,
                    description,
                    h1s: h1Matches.slice(0, 3), 
                    features: {
                        bio: hasBio,
                        bulkSize: hasKanister,
                        subscription: hasAbo,
                        awards: hasAwards,
                        b2b: hasB2B
                    }
                };
            } catch (err) {
                return { name: record.name, country: record.country, url: record.url, error: err.message };
            }
        });
        
        const batchResults = await Promise.all(promises);
        results.push(...batchResults);
        console.log(`Processed ${Math.min(i + batchSize, records.length)}/${records.length}`);
    }
    
    fs.writeFileSync('competitor_analysis_raw.json', JSON.stringify(results, null, 2));
    console.log('Analysis saved to competitor_analysis_raw.json');
}

analyzeUrls();
