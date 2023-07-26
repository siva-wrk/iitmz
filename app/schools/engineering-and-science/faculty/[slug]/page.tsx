import styles from "./page.module.scss";
import faculty from "@/data/faculty";
import Img from "@/components/image";
import { AiOutlineMail, AiTwotoneCalendar } from "react-icons/ai";
import { BsGlobeCentralSouthAsia, BsBookmarksFill } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import { RiAwardLine } from "react-icons/ri";
import Link from "next/link";

const dynamicParams = false;
export { dynamicParams };

export async function generateStaticParams() {
  return faculty.map((facultyMember) => ({
    slug: facultyMember.slug,
  }));
}

export default function FacultyPage({ params }: { params: { slug: string } }) {
  const facultyMember = faculty.find(
    (facultyMember) => facultyMember.slug === params.slug
  );
  if (!facultyMember) return <div>404</div>; // Implement 404 Page.
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.profile}>
          <Img
            src={facultyMember.img}
            width={200}
            height={200}
            alt={`Photo of ${facultyMember.name}`}
          />

          <h1>{facultyMember.name}</h1>
          <h3>{facultyMember.title}</h3>
          <p>
            <AiOutlineMail />
            <Link href={`mailto:${facultyMember.contact.email}`}>
              {facultyMember.contact.email}
            </Link>
          </p>
          <p className={styles.website}>
            <BsGlobeCentralSouthAsia />
            <Link target="_blank" href={facultyMember.contact.website}>
              {facultyMember.contact.website}
            </Link>
          </p>
          <div className={styles.qualification}>
            <h2>Education Qualification</h2>
            {facultyMember.qualification.map((qualification) => (
              <div key={qualification.title}>
                <h3>
                  {qualification.title} <span>{qualification.year}</span>
                </h3>
                <p>{qualification.course}</p>
                <p>{qualification.place}</p>
              </div>
            ))}
          </div>
          {facultyMember.awards && (
            <div className={styles.awards}>
              <h2>Awards</h2>
              <ul>
                {facultyMember.awards.map((award) => (
                  <li key={award.title}>
                    <RiAwardLine />
                    <div>
                      <p>{award.title}</p>
                      <p>{award.from}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className={styles.main}>
          <div className={styles.interests}>
            <h2>Research Interests</h2>
            <p>{facultyMember.interests}</p>
          </div>

          {facultyMember.courses?.length > 0 && (
            <div className={styles.courses}>
              <h2>Relevant Courses Taught</h2>
              <ul>
                {facultyMember.courses.map((course) => (
                  <li>{course.title}</li>
                ))}
              </ul>
            </div>
          )}

          <div className={styles.papers}>
            <h2>Selected Papers</h2>
            {facultyMember.papers.map((paper) => (
              <div className={styles.paper} key={paper.title}>
                <h4>
                  <AiTwotoneCalendar /> {paper.year}
                </h4>
                <h3>{paper.title}</h3>
                <div className={styles.authors}>
                  {paper.authors.map((author) => (
                    <p key={author}>
                      <FaUserEdit /> {author}
                    </p>
                  ))}
                </div>
                <p>
                  {" "}
                  <BsBookmarksFill /> {paper.publisher}
                </p>
              </div>
            ))}
          </div>
          {facultyMember.books && (
            <div className={styles.books}>
              <h2>Books Published</h2>
              <ul>
                {facultyMember.books.map((book) => (
                  <li key={book.title}>
                    <Img
                      src={book.cover}
                      height={150}
                      width={100}
                      alt={`Book Cover of ${book.title}`}
                    />
                    <div>
                      <h4>{book.title}</h4>
                      <p>{book.publisher}</p>
                      <h5>{book.year}</h5>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
