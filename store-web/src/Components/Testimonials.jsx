import { BackgroundImage, Center, Text, Box, Title } from '@mantine/core';
import orange from "../images/Orange.jpg"
export default function Testimonials() {
    const testimonials = [
        {
          name: "John Smith",
          text: "I recently purchased a new phone from this store and I couldn't be happier with my experience. The staff were incredibly helpful and knowledgeable, and they helped me find the perfect phone to suit my needs. Highly recommend!",
          location: "San Francisco, CA",
        },
        {
          name: "Jane Doe",
          text: "I had a fantastic experience at this store! They had a great selection of phones to choose from, and the salesperson was incredibly patient and helpful. I ended up getting a great deal on a new phone and I couldn't be more satisfied!",
          location: "Los Angeles, CA",
        },
        {
          name: "Adam Johnson",
          text: "I had a problem with my phone and I brought it to the store for repair. They quickly identified the issue and fixed it in no time. The team there was friendly, professional and reasonably priced. I will definitely be back if I need anything in the future.",
          location: "New York, NY"
        }
      ];
      const items = testimonials.map(test => (
        <div>
            <h3>{test.name}</h3>
            <p>{test.text}</p>
            <p>{test.location}</p>
        </div>
    ))
  return (
    <Box sx={{maxWidth: 3000}}>
      <BackgroundImage sx={{height: 750}}
        src={orange}
        radius="lg"
      >
          <Title order = {1} color="dark" size = "100px">
            Testimonials
          </Title>
          <Box sx={{maxWidth: '50%', marginLeft: '50%'}}>
          <Text sx={{textAlign: 'right', maxWidth: '80%'}}>
            {items}
          </Text>
        </Box>
      </BackgroundImage>
    </Box>
  );
}