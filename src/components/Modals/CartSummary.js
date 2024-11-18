import React, { useState } from "react";
import { Drawer, Button, Box } from "@mui/material";

export default function CartSummary() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(open);
  };

  return (
    <div>
      <Button variant="contained" onClick={toggleDrawer(true)}>
        Open Full-Screen Modal
      </Button>
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: "100%", // Full-screen width
            height: "100vh", // Full-screen height
            boxSizing: "border-box",
          },
        }}
      >
        <Box
          sx={{
            p: 3,
            height: "100%",
            backgroundColor: "#f5f5f5",
          }}
        >
          <Button onClick={toggleDrawer(false)} variant="outlined">
            Close
          </Button>
          <h2>Full-Screen Modal Content</h2>
          <p>
            This modal takes up the entire screen width on the left side. Add
            your content here.
          </p>
        </Box>
      </Drawer>
    </div>
  );
}
