import {
  Avatar,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { EllipsisVertical } from "lucide-react";
import NoEmployees  from "../../../common/Errors/NoEmployee";

export default function EmployeeList({ employee, setSearchTerm }) {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  const navigate = useNavigate();

  console.log(employee);
  if (!employee || employee.length === 0){
    return (
      <NoEmployees setSearchTerm={setSearchTerm}/>
    )
  };

  return (

    <TableContainer
      component={Paper}
      sx={{
        cursor: "pointer",
        backgroundColor: "#333333",
        borderRadius: "16px",
        border: "1px solid #444444",
        overflow: "hidden",
        boxShadow: "none",
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={headerStyle}>Employee</TableCell>
            <TableCell sx={headerStyle}>Department</TableCell>
            <TableCell sx={headerStyle}>Role</TableCell>
            <TableCell sx={headerStyle}>Status</TableCell>
            <TableCell sx={isDesktop ? headerStyleCell : { display: "none" }}>
              Join Date
            </TableCell>
            <TableCell sx={isDesktop ? headerStyleCell : { display: "none" }}>
              {" "}
              Actions{" "}
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {employee.map((emp) => (
            <TableRow
              key={emp.id}
              hover
              sx={{
                backgroundColor: "#333333", // bg-card
                "& td": {
                  borderBottom: "1px solid #444444",
                },
                "&:hover": {
                  backgroundColor: "#3d3d3d",
                },
              }}
            >
              <TableCell
                sx={cellStyle}
                onClick={() => navigate(`/employee/${emp.id}`)}
              >
                <div className="flex items-center gap-3">
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      bgcolor: "#D9D9D9",
                    }}
                  />
                  <span className="font-medium ">{emp.name}</span>
                </div>
              </TableCell>

              <TableCell sx={cellStyle}>{emp.department}</TableCell>

              <TableCell sx={cellStyle}>{emp.designation}</TableCell>

              <TableCell sx={cellStyle}>
                <Chip
                  label={emp.status}
                  size="small"
                  sx={{
                    backgroundColor: "#264E4B",
                    color: "#46E3D4",
                    fontWeight: 600,
                    borderRadius: "999px",
                  }}
                />
              </TableCell>
              <TableCell sx={isDesktop ? cellStyle : { display: "none" }}>
                {emp.joindate}
              </TableCell>
              <TableCell sx={isDesktop ? cellStyle : { display: "none" }}>
                <button className="p-2 rounded hover:bg-gray-700">
                  <EllipsisVertical size={18} />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const headerStyle = {
  backgroundColor: "#3A3A3A",
  color: "#A3A3A3", // Muted text
  fontWeight: 600,
  borderBottom: "1px solid #444444",
};

const headerStyleCell = {
  backgroundColor: "#3A3A3A",
  color: "#A3A3A3", // Muted text
  fontWeight: 600,
  borderBottom: "1px solid #444444",
};

const cellStyle = {
  color: "#FFFFFF", // White text
  borderBottom: "1px solid #444444",
};
