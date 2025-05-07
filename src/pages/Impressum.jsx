import { Container, Box, Typography, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email"; // Import the Email icon
import Banner from "../components/Banner";
import Socials from "../components/Socials";

export default function Impressum() {
  return (
    <>
      <Container maxWidth="md" disableGutters>
        <Box
          sx={{
            p: 6,
            pt: 4,
            backgroundColor: "background.secondary",
          }}
        >
          <Typography
            variant="h4"
            sx={{ mb: 0, textAlign: "left", fontWeight: "bold" }}
          >
            Impressum
          </Typography>
          <Typography sx={{ mb: 2 }}>Angaben gemäß § 5 TMG</Typography>
          <Typography sx={{ mb: 0, fontWeight: "bold" }}>
            Matthias Mitschele
          </Typography>
          <Typography sx={{ mb: 0 }}>Waldstraße 16</Typography>
          <Typography sx={{ mb: 2 }}>85737 Ismaning</Typography>
          <Typography sx={{ mb: 0, fontWeight: "bold" }}>
            Vertreten durch:
          </Typography>
          <Typography sx={{ mb: 1 }}>Matthias Mitschele</Typography>
          <Typography sx={{ mb: 0, fontWeight: "bold" }}>Kontakt:</Typography>
          <Typography sx={{ mb: 2 }}>
            <Link
              href="mailto:contact@matzgo.com"
              sx={{
                color: "#FFD580",
                textDecoration: "none", // Disable default underline
                "&:hover": {
                  color: "orange",
                },
                "&:active": {
                  color: "gray",
                },
                "&:hover, &:focus": {
                  textDecoration: "underline", // Add underline on hover or focus
                },
              }}
            >
              contact@matzgo.com
            </Link>
          </Typography>
          <Typography sx={{ mb: 0, fontWeight: "bold" }}>
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
          </Typography>
          <Typography sx={{ mb: 0 }}>Matthias Mitschele</Typography>
          <Typography sx={{ mb: 0 }}>Waldstraße 16</Typography>
          <Typography sx={{ mb: 2 }}>85737 Ismaning</Typography>

          <Typography sx={{ mb: 2, fontWeight: "bold" }}>
            Haftungsausschluss:
          </Typography>
          <Typography sx={{ mb: 0, fontWeight: "bold" }}>
            Haftung für Inhalte
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
            die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
            wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir
            gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
            als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
            gespeicherte fremde Informationen zu überwachen oder nach Umständen
            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.
          </Typography>

          <Typography sx={{ mb: 0, fontWeight: "bold" }}>
            Haftung für Links
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum
            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten
            Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
            nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </Typography>

          <Typography sx={{ mb: 0, fontWeight: "bold" }}>
            Urheberrecht
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
            Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
            Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
            gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
            entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
            werden wir derartige Inhalte umgehend entfernen.
          </Typography>

          <Typography sx={{ mb: 0, fontWeight: "bold" }}>
            Datenschutz
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Die Nutzung unserer Webseite ist in der Regel ohne Angabe
            personenbezogener Daten möglich. Soweit auf unseren Seiten
            personenbezogene Daten (beispielsweise Name, Anschrift oder
            eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
            auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
            Zustimmung nicht an Dritte weitergegeben.
            <br /> Wir weisen darauf hin, dass die Datenübertragung im Internet
            (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen
            kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte
            ist nicht möglich. Der Nutzung von im Rahmen der Impressumspflicht
            veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht
            ausdrücklich angeforderter Werbung und Informationsmaterialien wird
            hiermit ausdrücklich widersprochen. Die Betreiber der Seiten
            behalten sich ausdrücklich rechtliche Schritte im Falle der
            unverlangten Zusendung von Werbeinformationen, etwa durch
            Spam-Mails, vor.
          </Typography>
        </Box>
      </Container>
    </>
  );
}
