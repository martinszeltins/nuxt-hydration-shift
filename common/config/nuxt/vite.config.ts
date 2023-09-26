export default {
    server: {
        hmr: {
            clientPort: (process?.env?.RUNNING_IN_DOCKER !== 'false') ? 35547 : 24678,
        },

        host: true,
    },

    build: {
        chunkSizeWarningLimit: 2000,
    },
}
