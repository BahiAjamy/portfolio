import React from 'react';

class AppErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // Keep details in the console for debugging during local development.
        console.error('App runtime error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
                    <div className="max-w-2xl w-full rounded-2xl border border-rose-200 bg-white p-6 shadow-sm">
                        <h1 className="text-xl font-semibold text-rose-700 mb-2">Runtime Error</h1>
                        <p className="text-slate-700 mb-4">
                            The app crashed while rendering. Open the browser console to see the full stack trace.
                        </p>
                        <pre className="text-xs text-slate-700 bg-slate-50 border border-slate-200 rounded-lg p-3 overflow-auto">
                            {String(this.state.error)}
                        </pre>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default AppErrorBoundary;
