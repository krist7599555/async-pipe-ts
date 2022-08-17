// prettier-ignore
export function sync_pipe(init, ...fns) {
    let it = init;
    for (const fn of fns) {
        it = fn(init);
    }
    return it;
}
// prettier-ignore
export async function async_pipe(init, ...fns) {
    let it = await init;
    for (const fn of fns) {
        it = await fn(it);
    }
    return it;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2xpYi9jb3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCQSxrQkFBa0I7QUFDbEIsTUFBTSxVQUFVLFNBQVMsQ0FBQyxJQUFTLEVBQUUsR0FBRyxHQUFVO0lBQ2hELElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztJQUNkLEtBQUssTUFBTSxFQUFFLElBQUksR0FBRyxFQUFFO1FBQ3BCLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjtJQUNELE9BQU8sRUFBRSxDQUFDO0FBQ1osQ0FBQztBQXNCRCxrQkFBa0I7QUFDbEIsTUFBTSxDQUFDLEtBQUssVUFBVSxVQUFVLENBQUMsSUFBUyxFQUFFLEdBQUcsR0FBVTtJQUN2RCxJQUFJLEVBQUUsR0FBRyxNQUFNLElBQUksQ0FBQztJQUNwQixLQUFLLE1BQU0sRUFBRSxJQUFJLEdBQUcsRUFBRTtRQUNwQixFQUFFLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUE7S0FDbEI7SUFDRCxPQUFPLEVBQUUsQ0FBQztBQUNaLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIFN5bmNGdW48SSwgTz4gPSAoaW5wdXQ6IEkpID0+IE87XG50eXBlIEFzeW5jRnVuPEksIE8+ID0gKGlucHV0OiBBd2FpdGVkPEk+KSA9PiBPIHwgUHJvbWlzZTxPPjtcblxuLy8gcHJldHRpZXItaWdub3JlXG5leHBvcnQgZnVuY3Rpb24gc3luY19waXBlPEE+KGE6IEEpOiBBO1xuLy8gcHJldHRpZXItaWdub3JlXG5leHBvcnQgZnVuY3Rpb24gc3luY19waXBlPEEsIEI+KGE6IEEsIGI6IFN5bmNGdW48QSwgQj4pOiBCO1xuLy8gcHJldHRpZXItaWdub3JlXG5leHBvcnQgZnVuY3Rpb24gc3luY19waXBlPEEsIEIsIEM+KGE6IEEsIGI6IFN5bmNGdW48QSwgQj4sIGM6IFN5bmNGdW48QiwgQz4pOiBDO1xuLy8gcHJldHRpZXItaWdub3JlXG5leHBvcnQgZnVuY3Rpb24gc3luY19waXBlPEEsIEIsIEMsIEQ+KGE6IEEsIGI6IFN5bmNGdW48QSwgQj4sIGM6IFN5bmNGdW48QiwgQz4sIGQ6IFN5bmNGdW48QywgRD4pOiBEO1xuLy8gcHJldHRpZXItaWdub3JlXG5leHBvcnQgZnVuY3Rpb24gc3luY19waXBlPEEsIEIsIEMsIEQsIEU+KGE6IEEsIGI6IFN5bmNGdW48QSwgQj4sIGM6IFN5bmNGdW48QiwgQz4sIGQ6IFN5bmNGdW48QywgRD4sIGU6IFN5bmNGdW48RCwgRT4pOiBFO1xuLy8gcHJldHRpZXItaWdub3JlXG5leHBvcnQgZnVuY3Rpb24gc3luY19waXBlPEEsIEIsIEMsIEQsIEUsIEY+KGE6IEEsIGI6IFN5bmNGdW48QSwgQj4sIGM6IFN5bmNGdW48QiwgQz4sIGQ6IFN5bmNGdW48QywgRD4sIGU6IFN5bmNGdW48RCwgRT4sIGY6IFN5bmNGdW48RSwgRj4pOiBGO1xuLy8gcHJldHRpZXItaWdub3JlXG5leHBvcnQgZnVuY3Rpb24gc3luY19waXBlPEEsIEIsIEMsIEQsIEUsIEYsIEc+KGE6IEEsIGI6IFN5bmNGdW48QSwgQj4sIGM6IFN5bmNGdW48QiwgQz4sIGQ6IFN5bmNGdW48QywgRD4sIGU6IFN5bmNGdW48RCwgRT4sIGY6IFN5bmNGdW48RSwgRj4sIGc6IFN5bmNGdW48RiwgRz4pOiBHO1xuLy8gcHJldHRpZXItaWdub3JlXG5leHBvcnQgZnVuY3Rpb24gc3luY19waXBlPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEg+KGE6IEEsIGI6IFN5bmNGdW48QSwgQj4sIGM6IFN5bmNGdW48QiwgQz4sIGQ6IFN5bmNGdW48QywgRD4sIGU6IFN5bmNGdW48RCwgRT4sIGY6IFN5bmNGdW48RSwgRj4sIGc6IFN5bmNGdW48RiwgRz4sIGg6IFN5bmNGdW48RywgSD4pOiBQcm9taXNlPEg+O1xuLy8gcHJldHRpZXItaWdub3JlXG5leHBvcnQgZnVuY3Rpb24gc3luY19waXBlPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEgsIEk+KGE6IEEsIGI6IFN5bmNGdW48QSwgQj4sIGM6IFN5bmNGdW48QiwgQz4sIGQ6IFN5bmNGdW48QywgRD4sIGU6IFN5bmNGdW48RCwgRT4sIGY6IFN5bmNGdW48RSwgRj4sIGc6IFN5bmNGdW48RiwgRz4sIGg6IFN5bmNGdW48RywgSD4sIGk6IFN5bmNGdW48SCwgST4pOiBQcm9taXNlPEk+O1xuLy8gcHJldHRpZXItaWdub3JlXG5leHBvcnQgZnVuY3Rpb24gc3luY19waXBlPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEgsIEksIEo+KGE6IEEsIGI6IFN5bmNGdW48QSwgQj4sIGM6IFN5bmNGdW48QiwgQz4sIGQ6IFN5bmNGdW48QywgRD4sIGU6IFN5bmNGdW48RCwgRT4sIGY6IFN5bmNGdW48RSwgRj4sIGc6IFN5bmNGdW48RiwgRz4sIGg6IFN5bmNGdW48RywgSD4sIGk6IFN5bmNGdW48SCwgST4sIGo6IFN5bmNGdW48SSwgSj4pOiBQcm9taXNlPEk+O1xuLy8gcHJldHRpZXItaWdub3JlXG5leHBvcnQgZnVuY3Rpb24gc3luY19waXBlKGluaXQ6IGFueSwgLi4uZm5zOiBhbnlbXSkge1xuICBsZXQgaXQgPSBpbml0O1xuICBmb3IgKGNvbnN0IGZuIG9mIGZucykge1xuICAgIGl0ID0gZm4oaW5pdCk7XG4gIH1cbiAgcmV0dXJuIGl0O1xufVxuXG4vLyBwcmV0dGllci1pZ25vcmVcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY19waXBlPEE+KGE6IEEpOiBQcm9taXNlPEE+O1xuLy8gcHJldHRpZXItaWdub3JlXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXN5bmNfcGlwZTxBLCBCPihhOiBBLCBiOiBBc3luY0Z1bjxBLCBCPik6IFByb21pc2U8Qj47XG4vLyBwcmV0dGllci1pZ25vcmVcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY19waXBlPEEsIEIsIEM+KGE6IEEsIGI6IEFzeW5jRnVuPEEsIEI+LCBjOiBBc3luY0Z1bjxCLCBDPik6IFByb21pc2U8Qz47XG4vLyBwcmV0dGllci1pZ25vcmVcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY19waXBlPEEsIEIsIEMsIEQ+KGE6IEEsIGI6IEFzeW5jRnVuPEEsIEI+LCBjOiBBc3luY0Z1bjxCLCBDPiwgZDogQXN5bmNGdW48QywgRD4pOiBQcm9taXNlPEQ+O1xuLy8gcHJldHRpZXItaWdub3JlXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXN5bmNfcGlwZTxBLCBCLCBDLCBELCBFPihhOiBBLCBiOiBBc3luY0Z1bjxBLCBCPiwgYzogQXN5bmNGdW48QiwgQz4sIGQ6IEFzeW5jRnVuPEMsIEQ+LCBlOiBBc3luY0Z1bjxELCBFPik6IFByb21pc2U8RT47XG4vLyBwcmV0dGllci1pZ25vcmVcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY19waXBlPEEsIEIsIEMsIEQsIEUsIEY+KGE6IEEsIGI6IEFzeW5jRnVuPEEsIEI+LCBjOiBBc3luY0Z1bjxCLCBDPiwgZDogQXN5bmNGdW48QywgRD4sIGU6IEFzeW5jRnVuPEQsIEU+LCBmOiBBc3luY0Z1bjxFLCBGPik6IFByb21pc2U8Rj47XG4vLyBwcmV0dGllci1pZ25vcmVcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY19waXBlPEEsIEIsIEMsIEQsIEUsIEYsIEc+KGE6IEEsIGI6IEFzeW5jRnVuPEEsIEI+LCBjOiBBc3luY0Z1bjxCLCBDPiwgZDogQXN5bmNGdW48QywgRD4sIGU6IEFzeW5jRnVuPEQsIEU+LCBmOiBBc3luY0Z1bjxFLCBGPiwgZzogQXN5bmNGdW48RiwgRz4pOiBQcm9taXNlPEc+O1xuLy8gcHJldHRpZXItaWdub3JlXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXN5bmNfcGlwZTxBLCBCLCBDLCBELCBFLCBGLCBHLCBIPihhOiBBLCBiOiBBc3luY0Z1bjxBLCBCPiwgYzogQXN5bmNGdW48QiwgQz4sIGQ6IEFzeW5jRnVuPEMsIEQ+LCBlOiBBc3luY0Z1bjxELCBFPiwgZjogQXN5bmNGdW48RSwgRj4sIGc6IEFzeW5jRnVuPEYsIEc+LCBoOiBBc3luY0Z1bjxHLCBIPik6IFByb21pc2U8SD47XG4vLyBwcmV0dGllci1pZ25vcmVcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY19waXBlPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEgsIEk+KGE6IEEsIGI6IEFzeW5jRnVuPEEsIEI+LCBjOiBBc3luY0Z1bjxCLCBDPiwgZDogQXN5bmNGdW48QywgRD4sIGU6IEFzeW5jRnVuPEQsIEU+LCBmOiBBc3luY0Z1bjxFLCBGPiwgZzogQXN5bmNGdW48RiwgRz4sIGg6IEFzeW5jRnVuPEcsIEg+LCBpOiBBc3luY0Z1bjxILCBJPik6IFByb21pc2U8ST47XG4vLyBwcmV0dGllci1pZ25vcmVcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY19waXBlPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEgsIEksIEo+KGE6IEEsIGI6IEFzeW5jRnVuPEEsIEI+LCBjOiBBc3luY0Z1bjxCLCBDPiwgZDogQXN5bmNGdW48QywgRD4sIGU6IEFzeW5jRnVuPEQsIEU+LCBmOiBBc3luY0Z1bjxFLCBGPiwgZzogQXN5bmNGdW48RiwgRz4sIGg6IEFzeW5jRnVuPEcsIEg+LCBpOiBBc3luY0Z1bjxILCBJPiwgajogQXN5bmNGdW48SSwgSj4pOiBQcm9taXNlPEk+O1xuLy8gcHJldHRpZXItaWdub3JlXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXN5bmNfcGlwZShpbml0OiBhbnksIC4uLmZuczogYW55W10pIHtcbiAgbGV0IGl0ID0gYXdhaXQgaW5pdDtcbiAgZm9yIChjb25zdCBmbiBvZiBmbnMpIHtcbiAgICBpdCA9IGF3YWl0IGZuKGl0KVxuICB9XG4gIHJldHVybiBpdDtcbn1cbiJdfQ==