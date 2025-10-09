import React from 'react';
import { Paper, Box, Typography, Checkbox, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const TaskItem = ({ task, handleCompleteTask, openEditModal, handleDeleteTask }) => {
  return (
    <Paper elevation={2} sx={{ padding: '16px', borderRadius: '12px' }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography
            variant="subtitle1"
            style={{
              textDecoration: task.completed ? 'line-through' : 'none'
            }}
          >
            {task.name}
          </Typography>
          <Typography variant="body2" color="textSecondary">{task.description}</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Checkbox
            checked={task.completed}
            onChange={() => handleCompleteTask(task.id)}
            color="primary"
          />
          <IconButton onClick={() => openEditModal(task)} color="success">
            <Edit />
          </IconButton>
          <IconButton onClick={() => handleDeleteTask(task.id)} color="error">
            <Delete />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
};

export default TaskItem;
