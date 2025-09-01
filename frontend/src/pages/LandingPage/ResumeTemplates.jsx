import React from "react";
import "../../index.css";
import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

const templates = [
  {
    id: 1,
    img: "/templates/template.png",
    title: "Professional",
    desc: "A clean and modern template suitable for all industries. Emphasizes clarity and organization for showcasing your experience.",
  },
  {
    id: 2,
    img: "templates/template2.png",
    title: "Creative",
    desc: "A vibrant template designed for creative professionals. Bold accents help your portfolio stand out.",
  },
  {
    id: 3,
    img: "templates/template3.png",
    title: "Minimalist",
    desc: "A simple and elegant template focusing on content. Highlights your qualifications with a clean look.",
  },
  {
    id: 4,
    img: "templates/template4.png",
    title: "Executive",
    desc: "A formal and polished template for senior roles. Features clear sections for leadership and achievements.",
  },
  {
    id: 5,
    img: "templates/template5.png",
    title: "Modern",
    desc: "A trendy and stylish template for modern job seekers. Contemporary fonts and layout present you as forward-thinking.",
  },
  {
    id: 6,
    img: "templates/template6.png",
    title: "Classic",
    desc: "A timeless template with a traditional layout. This design follows established resume conventions.",
  },
];

const TemplateCard = ({ id, img, title, desc }) => {
  return (
    <div className="bg-slate-100 p-4 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer">
      <img src={img} alt={`Template ${id}`} />
      <div className="px-4 py-2">
        <h1 className="font-rubik font-medium">{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
};

const ResumeTemplates = () => {
  return (
    <div className="outlet">
      <div className="px-4">
        <span className="flex">
          <Home color="#7f22fe" width={20}></Home>
          <ChevronRight width={18}></ChevronRight>
          <h1 className="text-gray-500"> Resume Templates</h1>
        </span>

        <div className="mt-8 flex gap-60">
          <div className="flex-1">
            <h1 className="text-5xl font-rubik font-semibold mb-5">
              RESUME TEMPLATES
            </h1>
            <p className="w-full">
              Choose from our free resume templates and build your resume. Our
              intuitive drag-and-drop Resume Builder lets you customize in
              minutes and download as a PDF. Start now and enjoy it for free for
              7 days.
            </p>
            <div className="mt-10 flex gap-4">
              <Link to="/signup" className="primary-btn p-3">
                Import Resume
              </Link>
              <Link to="/signup" className="secondary-btn p-2.5">
                Customise Template
              </Link>
            </div>
          </div>
          <div className="flex-1 mb-50">
            <img src="cv.png" className="w-80 -my-30"></img>
          </div>
        </div>

        {/* More Templates */}

        <div className="mb-6">
          <h1 className="font-rubik mb-4 font-medium text-2xl text-center text-violet-500">
            Templates curated for you
          </h1>

          <div className="grid grid-cols-3 gap-6">
            {templates.map((template) => {
              return <TemplateCard key={template.id} {...template} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplates;
