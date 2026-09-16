---
"@lila-care/design-system": minor
---

Cambia `--nav-icon-default` de teal `#13c4a3` a amarillo crema `#FEF3C7`, y agrega
`--nav-icon-hover` (`#FDE68A`) y `--nav-icon-fg` (`#4a1f3a`).

El valor nuevo es el mismo que `--color-accent` (amber-100), reutilizado en vez de introducir un
color nuevo a la paleta.

**Esto revisa una decisión de KAN-30**, donde el teal figuraba como confirmado por Diseño. El
cambio viene de producto; si Diseño quiere sostener el teal, hay que revertir este token.

Contrastes medidos contra `--nav-background` (`#4a1f3a`):

| Par | Antes (`#13c4a3`) | Ahora (`#FEF3C7`) | Mínimo |
|---|---|---|---|
| Pastilla vs rail | 6.11 | **12.18** | 3.0 |
| Activo (`--brand-primary`) vs inactivo | 3.66 | **7.30** | — |
| Ícono blanco sobre la pastilla | 2.41 | 1.14 | 3.0 |
| Ícono `--nav-icon-fg` sobre la pastilla | — | **12.18** | 3.0 |

Por eso se agrega `--nav-icon-fg`: sobre una pastilla clara el ícono blanco no cumple, y los
consumidores tienen que usar este token para el item inactivo. El item activo sigue sobre
`--brand-primary` (ciruela), donde el blanco sí cumple.

Nota para quien evalúe alternativas: **no bajar la opacidad de esta pastilla.** Al hacerlo se
mezcla con `--nav-background`, que es ciruela, y converge con el item activo. Medido: el mismo
amarillo al 55% cae a 2.85:1 contra el activo, y un verde al 55% a 1.88:1. Para suavizar el
color hay que aclararlo, no transparentarlo.
