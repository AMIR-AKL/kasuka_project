import Title from "../Title/Title";
import Email from "./Email";
function Contact() {
  return (
    <section className="py-30">
      <div className="container">
        <Title title2={"تماس باما"} title1={"با ما تماس بگیرید"}></Title>
        <div className="mt-10 mb-30">
          <iframe
            className="w-full h-80 border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.0505044824!2d-73.64985819243294!3d40.69719336788428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z2YbbjNmI24zZiNix2qnYjCDYp9uM2KfZhNiqINmG24zZiNuM2YjYsdqp2Iwg2KfbjNin2YTYp9iqINmF2KrYrdiv2Ycg2KLZhdix24zaqdin!5e0!3m2!1sfa!2s!4v1743338300314!5m2!1sfa!2s"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <Email></Email>
      </div>
    </section>
  );
}
export default Contact;
