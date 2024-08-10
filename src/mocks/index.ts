async function initMocks() {
  const { server } = await import("./server");
  server.listen({ onUnhandledRequest: "bypass" });
}
initMocks();
export {};
