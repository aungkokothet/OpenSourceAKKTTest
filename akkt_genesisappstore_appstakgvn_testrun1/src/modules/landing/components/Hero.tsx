import { Button } from "~/components/ui/button";

export default function Hero() {
  return (
    <section className="w-full py-24 text-center bg-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to AppStack.GVN</h1>
      <p className="text-lg text-gray-600 mb-6">
        Launch your app with real traction — the Builders’ Stack begins here.
      </p>
      <Button asChild>
        <a href="/register">Join Now</a>
      </Button>
    </section>
  );
}
