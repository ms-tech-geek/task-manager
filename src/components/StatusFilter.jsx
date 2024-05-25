// src/components/StatusFilter.jsx
import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const StatusFilter = ({ status, setStatus }) => {
  return (
    <FormControl fullWidth margin="normal">
      <InputLabel>Status</InputLabel>
      <Select value={status} onChange={(e) => setStatus(e.target.value)}>
        <MenuItem value="All">All</MenuItem>
        <MenuItem value="To Do">To Do</MenuItem>
        <MenuItem value="In Progress">In Progress</MenuItem>
        <MenuItem value="Done">Done</MenuItem>
      </Select>
    </FormControl>
  );
};

export default StatusFilter;
