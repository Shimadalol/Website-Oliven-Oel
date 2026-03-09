import React, { Component, type ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Umbrella Error caught correctly:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-warm-white p-6 text-center">
          <div className="max-w-md p-8 bg-white rounded-3xl shadow-xl flex flex-col items-center">
            <div className="w-16 h-16 bg-red-50 text-terracotta rounded-full flex items-center justify-center mb-6">
              <AlertTriangle size={32} />
            </div>
            <h1 className="text-2xl font-serif font-bold text-charcoal mb-4">Uups, da lief etwas schief!</h1>
            <p className="text-charcoal/70 mb-8 leading-relaxed">
              Es sieht so aus, als hätte sich ein unerwarteter Fehler eingeschlichen. Bitte lade die Seite neu oder kehre zur Startseite zurück.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => window.location.reload()}
                className="bg-olive-100 hover:bg-olive-200 text-charcoal font-bold py-3 px-6 rounded-full transition-colors cursor-pointer"
              >
                Neu laden
              </button>
              <a 
                href="/"
                className="bg-earth-green hover:bg-earth-green/90 text-white font-bold py-3 px-6 rounded-full transition-colors cursor-pointer"
              >
                Zur Startseite
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
