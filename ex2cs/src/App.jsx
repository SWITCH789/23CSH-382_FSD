import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  TextField,
  Card,
  CardContent,
  Chip,
  Grid,
  Container,
  Stack
} from "@mui/material";
import "./App.css";

export default function App() {
  const [role, setRole] = useState("user");
  const [issues, setIssues] = useState([]);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  const addIssue = () => {
    if (!title || !location) return;
    setIssues([
      ...issues,
      { id: Date.now(), title, location, status: "Pending" }
    ]);
    setTitle("");
    setLocation("");
  };

  const updateStatus = (id, status) => {
    setIssues(
      issues.map(i => (i.id === id ? { ...i, status } : i))
    );
  };

  const statusColor = status => {
    if (status === "Pending") return "warning";
    if (status === "In Progress") return "info";
    return "success";
  };

  return (
    <>
      {/* HEADER */}
      <AppBar position="static" className="app-bar">
        <Toolbar className="toolbar">
          <Typography variant="h6">
            TrafFlow: Traffic Issue Reporting System
          </Typography>
          <Button
            variant="contained"
            className="role-btn"
            onClick={() =>
              setRole(role === "user" ? "police" : "user")
            }
          >
            Switch to {role === "user" ? "Policeman" : "User"}
          </Button>
        </Toolbar>
      </AppBar>

      <Container className="mt-4">
        {/* USER FORM */}
        {role === "user" && (
          <>
            <Typography variant="h5" className="section-title">
              Report an Issue
            </Typography>

            <Card className="form-card mb-4">
              <CardContent>
                <Stack spacing={2}>
                  <TextField
                    label="Issue Title"
                    fullWidth
                    color="primary"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                  />
                  <TextField
                    label="Location"
                    fullWidth
                    color="primary"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                  />
                  <Button
                    variant="contained"
                    className="submit-btn"
                    onClick={addIssue}
                  >
                    Submit Issue
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </>
        )}

        {/* LIST */}
        <Typography variant="h5" className="section-title">
          {role === "police"
            ? "Police Dashboard"
            : "Reported Issues"}
        </Typography>

        <Grid container spacing={3}>
          {issues.map(issue => (
            <Grid item xs={12} md={4} key={issue.id}>
              <Card className="issue-card">
                <CardContent>
                  <Typography variant="h6" className="issue-title">
                    {issue.title}
                  </Typography>

                  <Typography className="issue-location">
                    {issue.location}
                  </Typography>

                  <Chip
                    label={issue.status}
                    color={statusColor(issue.status)}
                    className="status-chip"
                  />

                  {role === "police" &&
                    issue.status !== "Resolved" && (
                      <Stack direction="row" spacing={1}>
                        <Button
                          size="small"
                          variant="outlined"
                          className="progress-btn"
                          onClick={() =>
                            updateStatus(issue.id, "In Progress")
                          }
                        >
                          In Progress
                        </Button>
                        <Button
                          size="small"
                          variant="contained"
                          className="resolve-btn"
                          onClick={() =>
                            updateStatus(issue.id, "Resolved")
                          }
                        >
                          Resolve
                        </Button>
                      </Stack>
                    )}

                  {issue.status === "Resolved" && (
                    <Typography className="resolved-text">
                      ✔ Resolved by Traffic Police
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
