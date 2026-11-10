import { Btn, Wrap } from "../components/ui.jsx";

export default function NotFound() {
  return (
    <section className="py-24 text-center">
      <Wrap>
        <p className="text-[6rem] font-extrabold leading-none text-sky">404</p>
        <h1 className="mt-2">That page wandered off</h1>
        <p className="mx-auto mt-3 max-w-md text-muted">The page you're looking for doesn't exist. Let's get you back on track.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Btn to="/" variant="ghost">← Back home</Btn>
          <Btn to="/contact">Get a Free Quote</Btn>
        </div>
      </Wrap>
    </section>
  );
}
