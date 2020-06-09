export const parse = text =>
    text
        .split(/\n/)
        .slice(1)
        .map(e =>
            e
                .trim()
                .split(/\s/)
                .map(Number)
        );
