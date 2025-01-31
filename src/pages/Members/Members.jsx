import './Members.css';
import MembersTable from '../../components/MembersTable/MembersTable';
import Navbar from '../../components/Navbar/Navbar';
const Members = () => {
  return (
    <>
      <Navbar />
      <div className="Members">
        <h2>Devup Members</h2>
        <p>List of all DevUp Members and Their Availability</p>
        <MembersTable />
      </div>
    </>
  );
};

export default Members;