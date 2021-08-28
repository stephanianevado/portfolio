export declare function isBlockedPage(pathname: string): boolean;
export declare function cleanAmpPath(pathname: string): string;
export declare type Disposable = () => void;
export declare type RenderResult = (observer: {
    next(chunk: string): void;
    error(error: Error): void;
    complete(): void;
}) => Disposable;
export declare function resultFromChunks(chunks: string[]): RenderResult;
export declare function resultToChunks(result: RenderResult): Promise<string[]>;
