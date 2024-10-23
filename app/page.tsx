import EmailForm from "@/components/EmailFom";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Toaster />

      <section className="w-screen h-dvh grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:h-full h-80 bg-[#D4EDFF] relative overflow-hidden">
          <Image
            src="/mockups-landing.png"
            alt="Mobile App Screenshots"
            fill
            className="object-contain mt-8 md:mt-0 px-60 object-bottom"
          />
        </div>

        <main className="flex flex-col gap-8 mt-8 justify-center px-6 pb-10">
          <h1 className="font-semibold tracking-tight text-zinc-900 text-3xl leading-tight md:text-4xl max-w-lg">
            Buddy AI: Revolutionizing the Shopping Experience.
          </h1>
          <p className="text-gray-500">
            Send us your email so we can give occasional updates on our progress! We promise not to spam you. We're chill.
          </p>

          <EmailForm />
        </main>
      </section>
    </>
  );
}
