import logo from "./assets/lm_logo.png";
import co from "./assets/co_lm.jpeg";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xkopzopz");

  if (state.succeeded) {
    return (
      <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-yellow-200">
        <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500 text-2xl font-bold text-[#20104a]">
            ✓
          </div>
          <h3 className="text-2xl font-black text-[#20104a]">
            Demande envoyée
          </h3>
          <p className="mt-4 max-w-md leading-7 text-slate-600">
            Merci. Votre demande a bien été envoyée. Nous vous répondrons dans
            les plus brefs délais.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-yellow-200"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <input
            id="nom"
            type="text"
            name="nom"
            required
            className="w-full rounded-2xl border border-slate-200 px-4 py-4 outline-none transition focus:border-yellow-500"
            placeholder="Nom"
          />
          <ValidationError
            prefix="Nom"
            field="nom"
            errors={state.errors}
            className="mt-2 text-sm text-red-600"
          />
        </div>

        <div>
          <input
            id="entreprise"
            type="text"
            name="entreprise"
            className="w-full rounded-2xl border border-slate-200 px-4 py-4 outline-none transition focus:border-yellow-500"
            placeholder="Entreprise"
          />
          <ValidationError
            prefix="Entreprise"
            field="entreprise"
            errors={state.errors}
            className="mt-2 text-sm text-red-600"
          />
        </div>

        <div className="md:col-span-2">
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full rounded-2xl border border-slate-200 px-4 py-4 outline-none transition focus:border-yellow-500"
            placeholder="Email"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="mt-2 text-sm text-red-600"
          />
        </div>

        <div className="md:col-span-2">
          <input
            id="telephone"
            type="tel"
            name="telephone"
            className="w-full rounded-2xl border border-slate-200 px-4 py-4 outline-none transition focus:border-yellow-500"
            placeholder="Téléphone"
          />
          <ValidationError
            prefix="Téléphone"
            field="telephone"
            errors={state.errors}
            className="mt-2 text-sm text-red-600"
          />
        </div>

        <div className="md:col-span-2">
          <textarea
            id="message"
            name="message"
            required
            className="min-h-[160px] w-full rounded-2xl border border-slate-200 px-4 py-4 outline-none transition focus:border-yellow-500"
            placeholder="Décrivez votre besoin"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="mt-2 text-sm text-red-600"
          />
        </div>

        <input
          type="hidden"
          name="_subject"
          value="Nouvelle demande depuis LM_FIELD"
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="mt-6 rounded-2xl bg-yellow-500 px-6 py-4 font-semibold text-[#20104a] transition hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state.submitting ? "Envoi..." : "Envoyer la demande"}
      </button>
    </form>
  );
}

export default function App() {
  const services = [
    {
      title: "Face à face",
      description:
        "Collecte de données sur le terrain en rue, à domicile, en point de vente et sur site client avec équipes expérimentées.",
      icon: "👥",
    },
    {
      title: "Téléphone / CATI",
      description:
        "Enquêtes téléphoniques menées avec rigueur, scripts maîtrisés et suivi qualité pour études B2C et B2B.",
      icon: "📞",
    },
    {
      title: "Mystery Shopper",
      description:
        "Évaluation anonyme des parcours clients afin de mesurer la qualité de service et identifier les axes d’amélioration.",
      icon: "🕵️",
    },
    {
      title: "Focus Group & Quali",
      description:
        "Recrutement de profils, animation et logistique complète pour vos études qualitatives et tests consommateurs.",
      icon: "💬",
    },
  ];

  const strengths = [
    "Plus de 20 ans d’expérience terrain",
    "Couverture Maroc & Afrique du Nord",
    "Équipes d’enquêteurs et superviseurs expérimentés",
    "Respect des délais et contrôle qualité renforcé",
  ];

  const capiBenefits = [
    "Plus rapide",
    "Plus économique",
    "Plus efficace",
    "Gestion live et centralisée des projets",
    "Utilisation des vidéos, sons et images",
    "Timing + GPS + dashboards live",
  ];

  const fieldNetwork = [
    { city: "Casablanca", supervisors: 5, investigators: 40 },
    { city: "Fès", supervisors: 2, investigators: 24 },
    { city: "Tanger", supervisors: 2, investigators: 16 },
    { city: "Marrakech", supervisors: 2, investigators: 16 },
    { city: "Oujda", supervisors: 2, investigators: 16 },
    { city: "Agadir", supervisors: 2, investigators: 16 },
  ];

  const qualityChecks = [
    "25% des questionnaires sont supervisés sur le terrain.",
    "40% des questionnaires sont back-checkés.",
    "Vérification GPS de tous les questionnaires.",
    "Contrôle du timing et de la durée d’administration.",
    "Enregistrements silencieux, sons et photos.",
    "Les questionnaires rejetés sont retirés et refaits.",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-yellow-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="LM_FIELD Logo"
              className="h-14 w-14 rounded-full object-cover shadow-sm"
            />
            <div>
              <p className="text-lg font-bold leading-none text-[#20104a]">
                LM_FIELD
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Field Research Operations
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#services"
              className="text-sm font-medium text-slate-700 hover:text-yellow-600"
            >
              Services
            </a>
            <a
              href="#expertise"
              className="text-sm font-medium text-slate-700 hover:text-yellow-600"
            >
              Expertise
            </a>
            <a
              href="#collecte"
              className="text-sm font-medium text-slate-700 hover:text-yellow-600"
            >
              Collecte
            </a>
            <a
              href="#reseau"
              className="text-sm font-medium text-slate-700 hover:text-yellow-600"
            >
              Réseau terrain
            </a>
            <a
              href="#qualite"
              className="text-sm font-medium text-slate-700 hover:text-yellow-600"
            >
              Qualité
            </a>
            <a
              href="#equipe"
              className="text-sm font-medium text-slate-700 hover:text-yellow-600"
            >
              Équipe
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-slate-700 hover:text-yellow-600"
            >
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="hidden rounded-2xl bg-yellow-500 px-5 py-3 text-sm font-semibold text-[#20104a] shadow-sm transition hover:bg-yellow-400 sm:inline-flex"
          >
            Demander un devis
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#160a38]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#160a38] via-[#24115e] to-[#3c248a]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:py-24 lg:px-8">
          <div className="text-white">
            <span className="inline-flex rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-300">
              Études quantitatives & qualitatives
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Votre partenaire terrain au Maroc et en Afrique du Nord
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              LM_FIELD accompagne les instituts, marques et cabinets d’études
              avec des dispositifs terrain fiables, rapides et parfaitement
              supervisés.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#services"
                className="rounded-2xl bg-yellow-500 px-6 py-3 font-semibold text-[#20104a] transition hover:bg-yellow-400"
              >
                Découvrir nos services
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-yellow-300/40 px-6 py-3 font-semibold text-yellow-200 transition hover:bg-white/10"
              >
                Nous contacter
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-yellow-300/10 bg-white/10 p-6 text-white shadow-2xl backdrop-blur"
              >
                <div className="text-3xl">{service.icon}</div>
                <h3 className="mt-4 text-xl font-bold">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/75">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="expertise"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">
              À propos
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#20104a] sm:text-4xl">
              Une structure agile, performante et orientée résultats
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Nous mettons à disposition des équipes de terrain, des
              superviseurs et des outils de collecte modernes pour sécuriser
              chaque étape de vos études marketing.
            </p>
          </div>

          <div className="rounded-3xl bg-[#faf7ef] p-8 shadow-sm ring-1 ring-yellow-200">
            <h3 className="text-xl font-bold text-[#20104a]">
              Pourquoi choisir LM_FIELD ?
            </h3>
            <div className="mt-6 space-y-4">
              {strengths.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-500 text-sm font-bold text-[#20104a]">
                    ✓
                  </div>
                  <p className="leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#f8f7fc] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">
              Nos services
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#20104a] sm:text-4xl">
              Des solutions terrain structurées pour chaque besoin d’étude
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl border border-[#e7e1f7] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-4xl">{service.icon}</div>
                <h3 className="mt-5 text-xl font-bold text-[#20104a]">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-block font-semibold text-yellow-600"
                >
                  En savoir plus →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="collecte"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">
            Collecte des données
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#20104a] sm:text-4xl">
            Une collecte CAPI plus rapide, plus fiable et plus intelligente
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Les interviews sont réalisées sur tablettes en face à face avec un
            suivi moderne, centralisé et opérationnel.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {capiBenefits.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-yellow-200 bg-[#faf7ef] p-8 shadow-sm"
            >
              <div className="mb-4 text-2xl">📊</div>
              <h3 className="text-xl font-bold text-[#20104a]">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="reseau" className="bg-[#f8f7fc] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">
              Réseau terrain
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#20104a] sm:text-4xl">
              Une couverture terrain nationale structurée
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {fieldNetwork.map((item) => (
              <div
                key={item.city}
                className="rounded-3xl border border-[#e7e1f7] bg-white p-8 shadow-sm"
              >
                <h3 className="text-2xl font-black text-[#20104a]">
                  {item.city}
                </h3>
                <div className="mt-6 space-y-3 text-slate-700">
                  <p>
                    <span className="font-bold text-yellow-600">
                      {item.supervisors}
                    </span>{" "}
                    superviseurs
                  </p>
                  <p>
                    <span className="font-bold text-yellow-600">
                      {item.investigators}
                    </span>{" "}
                    enquêteurs
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="qualite" className="bg-[#1a0c44] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
              Contrôle qualité
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Un système de contrôle qualité dynamique et rigoureux
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {qualityChecks.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-yellow-300/10 bg-white/5 p-8"
              >
                <div className="mb-4 text-2xl text-yellow-400">✓</div>
                <p className="leading-7 text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="equipe"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div className="rounded-[2rem] border border-yellow-200 bg-[#faf7ef] p-8 shadow-sm">
            <img
              src={co}
              alt="Head of Operations"
              className="mx-auto h-32 w-32 rounded-full object-cover border-4 border-yellow-400 shadow-lg"
            />
            <h3 className="mt-6 text-center text-2xl font-black text-[#20104a]">
              Said Mchater
            </h3>
            <p className="mt-2 text-center font-semibold text-yellow-700">
              Head of operations
            </p>
            <p className="mt-4 text-center text-slate-600">
              25 ans d’expérience
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">
              Notre équipe
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#20104a] sm:text-4xl">
              Une direction terrain expérimentée
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Saïd Mchater pilote les opérations de LM_FIELD et veille au
              respect des standards ainsi qu’aux process de collecte.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Il dispose d’une forte expérience dans la direction des
              opérations terrain, la supervision et les études nationales
              complexes.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-yellow-200 bg-white p-5 shadow-sm">
                <p className="font-bold text-[#20104a]">Master</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Marketing & communication – ESCA Casablanca
                </p>
              </div>
              <div className="rounded-2xl border border-yellow-200 bg-white p-5 shadow-sm">
                <p className="font-bold text-[#20104a]">DESA</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Pragmatique cognitive – Université Hassan II
                </p>
              </div>
              <div className="rounded-2xl border border-yellow-200 bg-white p-5 shadow-sm">
                <p className="font-bold text-[#20104a]">Licence</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Littérature Française option Linguistique
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#20104a] sm:text-4xl">
              Confiez-nous votre prochaine étude terrain
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Basée à Casablanca, LM_FIELD accompagne ses clients avec
              réactivité, proximité et exigence opérationnelle.
            </p>

            <div className="mt-8 space-y-4 rounded-3xl bg-[#faf7ef] p-6 ring-1 ring-yellow-200">
              <p className="text-slate-700">
                <span className="font-bold text-[#20104a]">Adresse :</span>{" "}
                Casablanca
              </p>
              <p className="text-slate-700">
                <span className="font-bold text-[#20104a]">Téléphone :</span>{" "}
                +212661417965
              </p>
              <p className="text-slate-700">
                <span className="font-bold text-[#20104a]">Email :</span>{" "}
                <a
                  href="mailto:smchater@lm-field.com"
                  className="text-yellow-600 hover:underline"
                >
                  smchater@lm-field.com
                </a>
              </p>
              <p className="text-slate-700">
                <span className="font-bold text-[#20104a]">LinkedIn :</span>{" "}
                <a
                  href="https://www.linkedin.com/in/said-mchater-b6797421?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 hover:underline break-all"
                >
                  https://www.linkedin.com/in/said-mchater
                </a>
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <footer className="border-t border-yellow-200 bg-[#160a38]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-white/80 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© LM_FIELD — Refonte inspirée d’un style corporate moderne.</p>
          <div className="flex flex-wrap gap-6">
            <a href="#services" className="hover:text-yellow-400">
              Services
            </a>
            <a href="#collecte" className="hover:text-yellow-400">
              Collecte
            </a>
            <a href="#qualite" className="hover:text-yellow-400">
              Qualité
            </a>
            <a href="#contact" className="hover:text-yellow-400">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}