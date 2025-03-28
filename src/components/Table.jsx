import { Container, Paper, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const Table = ({
  rows,
  columns,
  rowHeight = 52,
}) => {
  return (
    <Container sx={{ height: "100vh" }}>
      <Paper
        elevation={3}
        sx={{
          padding: "1rem 4rem",
          borderRadius: "1rem",
          margin: "auto",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          boxShadow: "none",
          padding: "1rem",
        }}
      >
        <Typography
          textAlign={"center"}
          variant="h4"
          sx={{
            margin: "2rem",
            textTransform: "uppercase",
          }}
        >
          Users
        </Typography>
        <DataGrid
          rows={rows}
          columns={columns}
          rowHeight={rowHeight}
          style={{
            height: "80%",
          }}
          sx={{
            border: "none",
            ".table-header": {
              bgcolor: "black",
              color: "white",
            },
          }}
        />
      </Paper>
    </Container>
  );
};

export default Table;
