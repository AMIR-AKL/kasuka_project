import Title from "../Title/Title";
import TeamPerson from "./TeamPerson";

function Team() {
  return (
    <section className="py-10">
      <div className="container">
        <Title title2={"تیم"} title1={"تیم ما را بررسی کنید"}></Title>
        <div className="mt-15 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <TeamPerson
            imgSrc={"./image/team/team-1.jpg"}
            personName={"والتر وایت"}
            info={"مدیر ارشد اجرایی"}
          ></TeamPerson>
          <TeamPerson
            imgSrc={"./image/team/team-2.jpg"}
            personName={"سارا جونسون"}
            info={"مدیر تولید"}
          ></TeamPerson>
          <TeamPerson
            imgSrc={"./image/team/team-3.jpg"}
            personName={"ویلیام اندرسون"}
            info={"CTO"}
          ></TeamPerson>
          <TeamPerson
            imgSrc={"./image/team/team-4.jpg"}
            personName={"آماندا جپسون"}
            info={"آماندا جپسون"}
          ></TeamPerson>
        </div>
      </div>
    </section>
  );
}
export default Team;
