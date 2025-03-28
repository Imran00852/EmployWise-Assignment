import { Button, Dialog, DialogTitle, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateUserMutation } from "../../redux/api/api";
import { setIsOpenEditDialog } from "../../redux/reducers/misc";
import { toast } from "react-hot-toast";

const EditDialog = ({ setRows }) => {
  const { isOpenEditDialog, selectedUser } = useSelector((state) => state.misc);

  const [updateUser] = useUpdateUserMutation();

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  useEffect(() => {
    if (selectedUser) {
      setFormData({
        first_name: selectedUser.first_name || "",
        last_name: selectedUser.last_name || "",
        email: selectedUser.email || "",
      });
    }
  }, [selectedUser]);

  const handleClose = () => {
    dispatch(setIsOpenEditDialog(false));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleClose();
    try {
      const res = await updateUser({ id: selectedUser.id, ...formData });
      if (res.data) {
        setRows((prevRows) =>
          prevRows.map((user) =>
            user.id === selectedUser.id ? { ...user, ...formData } : user
          )
        );
        toast.success("User Updated!");
      }
    } catch (err) {
      toast.error("Something went wrong!");
    }
  };
  
  return (
    <Dialog open={isOpenEditDialog} onClose={handleClose}>
      <Stack p={"2rem"}>
        <DialogTitle textAlign={"center"}>Update User</DialogTitle>
        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            variant="outlined"
            label="First Name"
            value={formData.first_name}
            onChange={(e) =>
              setFormData({ ...formData, first_name: e.target.value })
            }
          />
          <TextField
            margin="normal"
            required
            fullWidth
            variant="outlined"
            label="Last Name"
            value={formData.last_name}
            onChange={(e) =>
              setFormData({ ...formData, last_name: e.target.value })
            }
          />
          <TextField
            margin="normal"
            required
            fullWidth
            variant="outlined"
            type="email"
            label="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <Button
            type="submit"
            fullWidth
            sx={{ marginTop: "1rem" }}
            variant="contained"
          >
            Update
          </Button>
        </form>
      </Stack>
    </Dialog>
  );
};

export default EditDialog;
