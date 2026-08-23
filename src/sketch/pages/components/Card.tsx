// Import en vivo desde el propio paquete publicado (dependencia real, no alias de Vite —
// ver vite.config.ts / CLAUDE.md). Mismo specifier que usa lila-web hoy.
import { Calendar, Heart } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardIcon,
  CardMetadata,
  CardTitle,
} from "@lila-care/design-system";
import { ComponentPage, Section, Example, PropsTable } from "../../doc";

const BASIC_CODE = `
import { Card, CardContent, CardHeader, CardTitle } from "@lila-care/design-system";

<Card>
  <CardHeader>
    <CardTitle>Nuevas usuarias</CardTitle>
  </CardHeader>
  <CardContent>128</CardContent>
</Card>
`;

const STAT_CODE = `
import { Card, CardContent, CardDescription, CardHeader } from "@lila-care/design-system";

<Card variant="stat">
  <CardHeader>
    <CardDescription>Nuevas usuarias</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-3xl font-bold text-primary">128</p>
  </CardContent>
</Card>
`;

const NEO_CODE = `
import {
  Card, CardContent, CardHeader, CardTitle,
  CardIcon, CardMetadata,
} from "@lila-care/design-system";
import { Heart, Calendar } from "lucide-react";

<Card variant="neo">
  <CardHeader className="px-0 pt-0">
    <div className="flex items-center gap-3">
      <CardIcon>
        <Heart className="size-5 text-[#9B72C8]" />
      </CardIcon>
      <CardTitle>Resumen del ciclo</CardTitle>
    </div>
  </CardHeader>
  <CardContent className="px-0">
    <p className="text-2xl font-bold">28 días</p>
  </CardContent>
  <CardMetadata icon={<Calendar className="size-4" />}>
    Último período: 14 ene 2026
  </CardMetadata>
</Card>
`;

export default function CardPage() {
  return (
    <ComponentPage
      title="Card"
      tagline="Contenedor de sección del dashboard de Admin — siempre con CardHeader + CardContent, con o sin CardTitle."
      source="packages/design-system/src/components/card.tsx"
    >
      <Example
        title="Default"
        description="Patrón real de DashboardPage.tsx / NewUsersHeroCard.tsx / EngagementSection.tsx / TrendSection.tsx."
        code={BASIC_CODE}
      >
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Nuevas usuarias</CardTitle>
          </CardHeader>
          <CardContent>128</CardContent>
        </Card>
      </Example>

      <Example
        title='variant="stat"'
        description="Tarjeta de KPI para dashboards. Gradiente de marca, sombra tintada, métrica prominente."
        code={STAT_CODE}
      >
        <div className="grid grid-cols-2 gap-4 w-full max-w-xl">
          <Card variant="stat">
            <CardHeader>
              <CardDescription>Nuevas usuarias</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">128</p>
            </CardContent>
          </Card>
          <Card variant="stat">
            <CardHeader>
              <CardDescription>Sesiones activas</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">1,432</p>
            </CardContent>
          </Card>
          <Card variant="stat">
            <CardHeader>
              <CardDescription>Ciclos registrados</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">89</p>
            </CardContent>
          </Card>
          <Card variant="stat">
            <CardHeader>
              <CardDescription>Retención 30d</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">74%</p>
            </CardContent>
          </Card>
        </div>
      </Example>

      <Example
        title='variant="neo" + CardIcon + CardMetadata'
        description="Tarjeta con superficie neomorphism raised. CardIcon provee el contenedor circular raised para el ícono. CardMetadata agrega una fila de metadato con ícono a pie de tarjeta."
        previewBackground="#e8e6ee"
        code={NEO_CODE}
      >
        <div className="grid grid-cols-1 gap-4 w-full max-w-sm sm:grid-cols-2">
          <Card variant="neo">
            <CardHeader className="px-0 pt-0">
              <div className="flex items-center gap-3">
                <CardIcon>
                  <Heart className="size-5 text-[#9B72C8]" />
                </CardIcon>
                <CardTitle>Resumen del ciclo</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="px-0">
              <p className="text-2xl font-bold">28 días</p>
            </CardContent>
            <CardMetadata icon={<Calendar className="size-4" />}>
              Último período: 14 ene 2026
            </CardMetadata>
          </Card>
          <Card variant="neo">
            <CardHeader className="px-0 pt-0">
              <div className="flex items-center gap-3">
                <CardIcon>
                  <Calendar className="size-5 text-[#9B72C8]" />
                </CardIcon>
                <CardTitle>Próxima ovulación</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="px-0">
              <p className="text-2xl font-bold">En 6 días</p>
            </CardContent>
            <CardMetadata icon={<Heart className="size-4" />}>
              Fase folicular activa
            </CardMetadata>
          </Card>
        </div>
      </Example>

      <Section title="Component API">
        <PropsTable
          heading="Card"
          rows={[
            {
              name: "variant",
              type: '"default" | "stat" | "neo"',
              description:
                "default: contenedor de sección estándar. stat: tarjeta KPI con gradiente de marca y sombra tintada. neo: superficie neomorphism raised con fondo --neo-bg.",
            },
            {
              name: "className",
              type: "string",
              description: "Se combina con las clases del variant vía cn().",
            },
            {
              name: "...props",
              type: "React.ComponentProps<'div'>",
              description: "Cualquier prop nativa de <div> pasa directo.",
            },
          ]}
        />
        <PropsTable
          heading="CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter"
          rows={[
            {
              name: "className / ...props",
              type: "React.ComponentProps<'div'>",
              description: "Cada sub-componente extiende un <div> nativo.",
            },
          ]}
        />
        <PropsTable
          heading="CardIcon"
          rows={[
            {
              name: "children",
              type: "ReactNode",
              description:
                "Ícono (lucide o SVG) centrado dentro del contenedor circular neomorphism raised (48×48px).",
            },
            {
              name: "className",
              type: "string",
              description: "Se combina con las clases del contenedor vía cn().",
            },
          ]}
        />
        <PropsTable
          heading="CardMetadata"
          rows={[
            {
              name: "icon",
              type: "ReactNode",
              description: "Ícono opcional a la izquierda del texto.",
            },
            {
              name: "children",
              type: "ReactNode",
              description: "Texto o contenido del metadato.",
            },
            {
              name: "className",
              type: "string",
              description: "Se combina con las clases del contenedor vía cn().",
            },
          ]}
        />
      </Section>
    </ComponentPage>
  );
}
