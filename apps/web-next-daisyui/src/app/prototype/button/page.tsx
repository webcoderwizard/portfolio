import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/const";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Prototype - Button`,
  description: `${SITE_TITLE} - Prototype - Button`,
};

export default function Page() {
  return (
    <main className="flex min-h-screen w-full p-8 gap-8">
      <section className="flex flex-col gap-8 flex-1">
        <h1>Default</h1>
        <button className="btn">Button</button>
      </section>

      <section className="flex flex-col gap-8 flex-1">
        <h1>Brand Colors</h1>
        <button className="btn btn-neutral">Neutral</button>
        <button className="btn btn-primary">primary</button>
        <button className="btn btn-secondary">secondary</button>
        <button className="btn btn-accent">accent</button>
        <button className="btn btn-info">info</button>
        <button className="btn btn-success">success</button>
        <button className="btn btn-warning">warning</button>
        <button className="btn btn-error">error</button>
      </section>

      <section className="flex flex-col gap-8 flex-1">
        <h1>Styles</h1>
        <button className="btn btn-ghost">ghost</button>
        <button className="btn btn-link">link</button>
        <button className="btn btn-outline">outline</button>
        <button className="btn btn-active">active</button>
        <button className="btn btn-disabled">disabled</button>
        <button className="btn btn-glass">glass</button>
        <button className="btn no-animation">no-animation</button>
      </section>

      <section className="flex flex-col gap-8 flex-1">
        <h1>Sizes</h1>
        <button className="btn btn-lg">lg</button>
        <button className="btn btn-md">md</button>
        <button className="btn btn-sm">sm</button>
        <button className="btn btn-xs">xs</button>
        <button className="btn btn-wide">wide</button>
        <button className="btn btn-block">block</button>
        <button className="btn btn-circle">circle</button>
        <button className="btn btn-square">square</button>
      </section>
    </main>
  );
}
