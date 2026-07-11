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

export default function EmployeeTabletTable({ employee }) {
  return (
    <TableContainer
      component={Paper}
      sx={{
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
              <TableCell sx={cellStyle}>
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

const cellStyle = {
  color: "#FFFFFF", // White text
  borderBottom: "1px solid #444444",
};
