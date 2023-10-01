export {};
declare global {
    interface GoToOptions {
        referer?: string;
        timeout?: number;
        waitUntil?: 'load' | 'domcontentloaded' | 'networkidle';
    }
}