import { useEffect, useState } from "react";
import Table from "../components/Table";
import { useDeleteUserMutation, useGetUsersQuery } from "../redux/api/api";
import { Skeleton, Avatar, IconButton, Pagination, Box } from "@mui/material";
import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";
import EditDialog from "../components/Dialogs/EditDialog";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpenEditDialog, setSelectedUser } from "../redux/reducers/misc";
import toast from "react-hot-toast";

const Home = () => {
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState([]);

  const dispatch = useDispatch();
  const { selectedUser } = useSelector((state) => state.misc);
  console.log(selectedUser);

  const { isLoading, data } = useGetUsersQuery({ page });
  const [deleteUser] = useDeleteUserMutation();

  const totalPages = data?.total_pages || 1;

  const handleEdit = (user) => {
    dispatch(setSelectedUser(user));
    dispatch(setIsOpenEditDialog(true));
  };

  const handleDelete = async ({ id }) => {
    await deleteUser(id);
    setRows((prevRows) => prevRows.filter((user) => user.id !== id));
    toast.success("Deleted user!");
  };

  useEffect(() => {
    if (data && data.data) {
      setRows(data.data.map((user) => ({ ...user, id: user.id })));
    }
  }, [data]);

  const handlePageChange = (e, newPage) => {
    setPage(newPage);
  };

  const columns = [
    {
      field: "avatar",
      headerName: "Avatar",
      headerClassName: "table-header",
      width: 150,
      renderCell: (params) => <Avatar src={params.value} alt="Avatar" />,
    },
    {
      field: "first_name",
      headerName: "First Name",
      headerClassName: "table-header",
      width: 300,
    },
    {
      field: "last_name",
      headerName: "Last Name",
      headerClassName: "table-header",
      width: 300,
    },
    {
      field: "email",
      headerName: "Email",
      headerClassName: "table-header",
      width: 300,
    },
    {
      field: "update",
      headerName: "Update",
      headerClassName: "table-header",
      width: 200,
      renderCell: (params) => (
        <IconButton onClick={() => handleEdit(params.row)}>
          <EditIcon />
        </IconButton>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      headerClassName: "table-header",
      width: 200,
      renderCell: (params) => (
        <IconButton onClick={() => handleDelete(params.row)}>
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];

  return isLoading ? (
    <Skeleton height={"100vh"} />
  ) : (
    <>
      <Table rows={rows} columns={columns} />
      <Box display="flex" justifyContent="center" my={2}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>

      <EditDialog setRows={setRows} />
    </>
  );
};

export default Home;
