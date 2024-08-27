import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/const";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Prototype - Button`,
  description: `${SITE_TITLE} - Prototype - Button`,
};

export default function Page() {
  const colors = [
    {
      name: "Neutral",
      cls: "btn-neutral"
    },
    {
      name: "Primary",
      cls: "btn-primary"
    },
    {
      name: "Secondary",
      cls: "btn-secondary"
    },
    {
      name: "Accent",
      cls: "btn-accent"
    },
    {
      name: "Info",
      cls: "btn-info"
    },
    {
      name: "Success",
      cls: "btn-success"
    },
    {
      name: "Warning",
      cls: "btn-warning"
    },
    {
      name: "Error",
      cls: "btn-error"
    }
  ]

  const states = [
    {
      name: "Ghost",
      cls: "btn-ghost"
    },
    {
      name: "Link",
      cls: "btn-link"
    },
    {
      name: "Outline",
      cls: "btn-outline"
    },
    {
      name: "Active",
      cls: "btn-active"
    },
    {
      name: "Disabled",
      cls: "btn-disabled"
    },
    {
      name: "Glass",
      cls: "btn-glass"
    },
    {
      name: "No Animation",
      cls: "no-animation"
    }
  ]

  const sizes = [
    {
      name: "Lg",
      cls: "btn-lg"
    },
    {
      name: "Md",
      cls: "btn-md"
    },
    {
      name: "Sm",
      cls: "btn-sm"
    },
    {
      name: "Xs",
      cls: "btn-xs"
    },
    {
      name: "Wide",
      cls: "btn-wide"
    },
    {
      name: "Block",
      cls: "btn-block"
    },
    {
      name: "Circle",
      cls: "btn-circle"
    },
    {
      name: "Square",
      cls: "btn-square"
    }
  ]

  return (
    <main className="flex flex-col min-h-screen w-full p-8 gap-4 bg-white">
      <section className="flex flex-col gap-4 border p-4 rounded-xl border-primary">
        <h1 className="font-bold">Button</h1>

        <div className="flex w-full justify-center gap-4">
          <button className="btn w-auto">Button</button>
        </div>
      </section>

      <section className="flex flex-col gap-4 border p-4 rounded-xl border-primary">
        <h1 className="font-bold">Brand Colors</h1>

        <div className="flex w-full justify-center gap-4">
          {colors.map(c => (
            <button key={c.cls} className={`btn ${c.cls}`}>{c.name}</button>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4 border p-4 rounded-xl border-primary">
        <h1 className="font-bold">States</h1>

        <div className="flex w-full justify-center gap-4">
          {states.map(s => (
            <button key={s.cls} className={`btn ${s.cls}`}>{s.name}</button>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4 border p-4 rounded-xl border-primary">
        <h1 className="font-bold">Sizes</h1>

        <div className="flex w-full justify-center gap-4">
          {sizes.map(s => (
            <button key={s.cls} className={`btn ${s.cls}`}>{s.name}</button>
          ))}
        </div>
      </section>

    </main>
  );
}
