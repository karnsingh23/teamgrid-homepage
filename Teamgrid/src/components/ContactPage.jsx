import React, { useRef, useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  IconButton,
  useTheme,
  useMediaQuery,
  Button,
  Grid,
    Checkbox, 
  FormControlLabel,
  Divider,
  Link
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import react from '../assets/front1.png';
import wordpress from '../assets/front2.png';
import shopify from '../assets/front3.png';
import postman from '../assets/front1.png';
import figma from '../assets/front2.png';
import nodejs from '../assets/front3.png';
import postgresql from '../assets/front1.png';
import mui from '../assets/front2.png';
import bootstrap from '../assets/front3.png';
import contactimage from "../assets/contactimage.png"
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const ContactPage = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    service: '',
    description: '',
    consultation: false,
    match: false,
    nda: false
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleRemoveFile = (index) => {
    setSelectedFiles(files => files.filter((_, i) => i !== index));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({
      ...f,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    try {
      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('company', form.company);
      formData.append('email', form.email);
      formData.append('service', form.service);
      formData.append('description', form.description);
      formData.append('consultation', form.consultation);
      formData.append('match', form.match);
      formData.append('nda', form.nda);
      selectedFiles.forEach(file => formData.append('files', file));
      const res = await axios.post('https://tgsadminbackend.onrender.com/api/contact', formData);
      setSuccess(res.data.message || 'Submitted!');
      setForm({
        name: '', company: '', email: '', service: '', description: ''
      });
      setSelectedFiles([]);
    } catch (err) {
      setError(err.response?.data?.message || 'Submission failed.');
    } finally {
      setLoading(false);
    }
  };

  const tools = [
    { name: 'Figma', icon: figma },
    { name: 'Bootstrap', icon: bootstrap },
    { name: 'React', icon: react },
    { name: 'Material UI', icon: mui },
    { name: 'PostgreSQL', icon: postgresql },
    { name: 'Node.js', icon: nodejs },
    { name: 'Shopify', icon: shopify },
    { name: 'Postman', icon: postman },
    { name: 'WordPress', icon: wordpress },
  ];

  const orbitTriplets = [
    [tools[0], tools[1], tools[2]],
    [tools[3], tools[4], tools[5]],
    [tools[6], tools[7], tools[8]],
  ];

  const angleRef = useRef([0, -10, -55]);
  const orbitRefs = useRef([]);
  const initialAngles = useRef(Array(3).fill().map(() => 10));

  const renderOrbit = (toolsPair, radius, orbitIndex) => {
    const currentAngle = angleRef.current[orbitIndex];
    const baseAngle = initialAngles.current[orbitIndex];
    const iconAngles = toolsPair.map((_, i) => baseAngle + (360 / toolsPair.length) * i);
    const dotAngles = iconAngles.map((angle, i) => {
      const nextIndex = (i + 1) % iconAngles.length;
      return (angle + iconAngles[nextIndex]) * 8;
    });

    return (
      <Box
        key={`orbit-${orbitIndex}`}
        ref={(el) => (orbitRefs.current[orbitIndex] = el)}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: radius * 2,
          height: radius * 2,
          borderRadius: '50%',
          border: '1px solid rgba(206, 198, 198, 0.3)',
          transition: 'transform 0.1s linear',
          zIndex: 4 - orbitIndex,
          transform: `translate(-50%, -50%) rotate(${currentAngle}deg)`
        }}
      >
        {dotAngles.map((angle, i) => (
          <Box
            key={`dot-${i}`}
            sx={{
              position: 'absolute',
              top: `calc(50% + ${radius * Math.sin((angle * Math.PI) / 180)}px)`,
              left: `calc(50% + ${radius * Math.cos((angle * Math.PI) / 180)}px)`,
              transform: 'translate(-50%, -50%)',
              width: { xs: 6, md: 10 },
              height: { xs: 6, md: 10 },
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              boxShadow: '0 0 3px rgba(75, 145, 241, 0.5)',
            }}
          />
        ))}

        {toolsPair.map((tool, i) => {
          const angle = baseAngle + (360 / toolsPair.length) * i;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <Box
              key={tool.name}
              sx={{
                position: 'absolute',
                top: `calc(50% + ${y}px)`,
                left: `calc(50% + ${x}px)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: `translate(-50%, -50%) rotate(${-currentAngle}deg)`
              }}
            >
              <Box
                sx={{
                  width: { xs: 30, md: 50, lg: 70 },
                  height: { xs: 30, md: 50, lg: 70 },
                  borderRadius: '50%',
                  backgroundColor: '#0d264f',
                  border: '2px solid rgba(206, 198, 198, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:hover': {
                    transform: 'scale(1.15)',
                    boxShadow: '0 0 5px rgba(75, 145, 241, 0.8)'
                  }
                }}
              >
                <Box
                  component="img"
                  src={tool.icon}
                  alt={tool.name}
                  sx={{ width: '70%', height: '70%', objectFit: 'contain' }}
                />
              </Box>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      width: '100%',
      maxWidth: '1300px',
    height: { xs: '100vh', md: '820px' },
      mx: 'auto',
      borderRadius: { xs: 0, md: '20px' },
      overflow: 'hidden',
      backgroundColor: '#fff',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
      position: 'relative'
    }}>

      {/* Close button */}
      <IconButton sx={{ position: 'absolute', top: 16, right: 16 }} onClick={props.onClose}>
        <CloseIcon />
      </IconButton>

      {/* Left Section */}
      <Box sx={{ width: { xs: '100%', md: '40%' }, background: 'linear-gradient(to bottom, #08438bff,#05244cff)', position: 'relative',overflow:'hidden' }}>
        <Box sx={{ p: 4, color: '#fff', textAlign: 'center', zIndex: 2, position: 'relative' }}>
          <Typography variant="h4" fontWeight="bold">
            Let's Build Something <span style={{ color: '#00E5A0' }}>Together</span>
          </Typography>
          <Typography variant="body1" mt={2}>
            We're here to answer questions, scope projects, and help you find the right talent.
          </Typography>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: '45%',
            left: '60%',
            transform: 'translate(-30%, -45%)',
            width: { xs: 240, sm: 400, lg: 800 },
            height: { xs: 240, sm: 400, lg: 800 },
            zIndex: 0,
            opacity: { xs: 0.3, md: 1 },
          }}
        >
          {orbitTriplets.map((triplet, index) =>
            renderOrbit(triplet, isMobile ? 180 + index * 100 : 110 + index * 110, index)
          )}
        </Box>
        <Box
        component='img'
        src={contactimage}
        sx={{position:'absolute',bottom:0}}
        
        />
      </Box>

      {/* Right Section */}
 <Box sx={{ 
        width: { xs: '100%', md: '60%' },
        height: '100%',
        overflowY: 'auto',
        p: { xs: 2, md: 4 }
      }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contact us
        </Typography>
        
        <Typography variant="body1" paragraph>
          Let's connect and bring your ideas to life — we're just a message away.
        </Typography>
        
        <Box component="form" sx={{ mt: 3 }} onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            variant="outlined"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          
          <TextField
            fullWidth
            label="Company"
            margin="normal"
            variant="outlined"
            name="company"
            value={form.company}
            onChange={handleChange}
          />
          
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            variant="outlined"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          
          <TextField
            fullWidth
            label="Type of Service You Need"
            margin="normal"
            variant="outlined"
            select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
          >
            <MenuItem value="Web Development">Web Development</MenuItem>
            <MenuItem value="Mobile App Development">Mobile App Development</MenuItem>
            <MenuItem value="UI/UX Design">UI/UX Design</MenuItem>
            <MenuItem value="Consulting">Consulting</MenuItem>
          </TextField>
          
          <TextField
            fullWidth
            label="Describe Your Project / Requirements"
            margin="normal"
            variant="outlined"
            multiline
            rows={6}
            name="description"
            value={form.description}
            onChange={handleChange}
            required
          />
          {/* File upload input */}
          <Box sx={{ my: 2 }}>
            <Button
              variant="outlined"
              component="label"
              fullWidth
              sx={{ justifyContent: 'flex-start' }}
              disabled={loading}
            >
              Upload file(s)
              <input
                type="file"
                hidden
                multiple
                onChange={e => setSelectedFiles(Array.from(e.target.files))}
              />
            </Button>
            {/* Show selected file names with remove option */}
            {selectedFiles.length > 0 && (
              <Box sx={{ mt: 1 }}>
                {selectedFiles.map((file, idx) => (
                  <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                    <Typography variant="body2" noWrap sx={{ flex: 1 }}>
                      {file.name}
                    </Typography>
                    <IconButton size="small" onClick={() => handleRemoveFile(idx)} disabled={loading}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
          <Divider sx={{ my: 3 }} />
          
          
          {success && <Typography color="success.main" sx={{ mb: 2 }}>{success}</Typography>}
          {error && <Typography color="error.main" sx={{ mb: 2 }}>{error}</Typography>}
          <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
            <Button 
              variant="contained" 
              color="primary" 
              size="large"
              fullWidth
              type="submit"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit'}
            </Button>
            <Button 
              variant="outlined" 
              color="primary" 
              size="large"
              fullWidth
              type="button"
              disabled={loading}
              onClick={() => {
                setForm({ name: '', company: '', email: '', service: '', description: '', consultation: false, match: false, nda: false });
                setSelectedFiles([]);
                setSuccess(null);
                setError(null);
              }}
            >
              Reset
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactPage;