interface Announcement {
  title: string;
}

type AnnouncementsArray = Announcement[];

const announcements: AnnouncementsArray = [
  {
    title:
      "Sample question papers for BS & MTech in DS & AI are available for Download in the Admissions 2023 Sidebar Widget",
  },
  {
    title: "Applications are closing {{DAYS_LEFT,2023-08-05}}. Apply Now!",
  },
  {
    title:
      "Contest Winners Announced: Shirllie Praise Apiyo, Irfan Khan, Alekhya Purkait, Aashish Charles, Arua mercy Orieoma",
  },
];

export default announcements;
