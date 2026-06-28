export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    const { default: handler } = await import("@tanstack/react-start/server-entry");
    return (handler as any).fetch(request, env, ctx);
  },
};
