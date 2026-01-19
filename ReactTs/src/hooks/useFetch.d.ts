interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}
export declare function useFetch<T>(url: string): FetchState<T>;
export {};
//# sourceMappingURL=useFetch.d.ts.map