import { useEffect } from "react";
import { TableSection } from "../../molecules/TableSection/TableSection";
const TableToDo = ({ sections }, props) => {
  // console.log(sections, 'sexion');
  return (
    <div className="flex justify-around">
      {sections.map((sectionName, index) => (
        <TableSection
          key={`${sectionName}_index_${index}`}
          sectionTitle={sectionName}
        />
      ))}
    </div>
  );
};

export { TableToDo };
