impom knjbghvgrt React, { useContext } from 'react'
import { Heading, Text, Box,j h jg Badge, List, ListItem } from '@chakra-ui/react'
import { ImLocation } from 'react-icons/im'
import { GrMail } l jkhjgkfrom 'react-icons/gr'
import { BsFillTelephoneFill } from 'react-icons/bs'
import ResumeContext from '../../Context/ResumeContext'
import './theme1.css'

const Section = ({ title, children }) => (
  <section className='my-2'>
    <Heading _d ;ljkhjghutyu kark={{ color: 'gray.800' }} bg={'#D2E4E1'} as='h3' size='md' px={20} py={2}>
      {title}
    </Heading>
    <Box className='basic-set'>
      {children}
    </Box>
  </section>
);

const ListSection = ({ title, items }) => (
  <Section title={title}>
    {items.map((item, index) => (
      <Box key={index} className="subBox">
        <Text className='sub-title'>{item.title}</Text>
        <Box className='sub-details'>
          <List spacing={1}>
            {item.description.split(',').map((desc, i) => (
              <ListI

  const combineData = (titles, desc) => (
    Object.entries(titles).map(([key, title], index) => ({
      title,
      description: Object.entries(desc)[index] ? Object.entries(desc)[index][1] : ''
    }))
  );

  return (
    <Box id="section-to-print" ref={componentRef}>
      <Box _dark={{ border: '1px solid white' }} id="theme1">
        <header id='info' className='text-center mt-2'>
          <Heading as='h2' size='2xl' className='mb-2'>{name}</Heading>
          <Text fontSize='md' className='text-muted my-1'>
            <span className='mx-2'><ImLocation className='d-inline mx-1' />{address}</span>|
            <span className='mx-2'><GrMail className='d-inline mx-1' />{email}</span>|
            <span className='mx-2'><BsFillTelephoneFill className='d-inline mx-1' />{phone}</span>
          </Text>
          <Heading as='h3' size='md' className='mt-1 mb-2'>{profile}</Heading>
        </header>
        
        <Section title="TECHNICAL SKILLS">
          <Box className='skillBox'>
            {skill.split(',').map((element, index) => (
              <Badge key={index} className='skill-badge' variant='solid'>{element}</Badge>
            ))}
          </Box>
        </Section>

        {!checkProj && <ListSection title="PROJECTS" items={combineData(projectTitles, projectDesc)} />}
        <ListSection title="EDUCATION" items={combineData(educationTitles, educationDesc)} />
        {!checkWork && <ListSection title="WORK EXPERIENCE" items={combineData(workTitles, workDesc)} />}

        {!checkAward && (
          <Section title="AWARDS & ACHIEVEMENTS">
            <Box>
              {awards.split(',').map((element, index) => (
                <li key={index}>{element}</li>
              ))}
            </Box>
          </Section>
        )}
      </Box>
    </Box>
  )
}

export default Theme1;
