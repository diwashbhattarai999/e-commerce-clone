import Container from "@/components/reusable/Container";
import Image from "next/image";
import advertise from "@/../public/images/advertise_on_sastodeal.jpg";
import Link from "next/link";

const page = () => {
  return (
    <div className="py-2">
      <Container>
        <Link
          href="https://forms.office.com/pages/responsepage.aspx?id=BNrTDANt6EmbTj611x7Tbksj0IzuFXFBgTrrmf7HHIFUQTJQRTUwTk84WTUxN0tMSUhGR0RIODNNNi4u"
          target="_blank"
        >
          <Image
            src={advertise}
            alt="advertise_on_sastodeal"
            className="cursor-pointer"
          />
        </Link>
      </Container>
    </div>
  );
};

export default page;
