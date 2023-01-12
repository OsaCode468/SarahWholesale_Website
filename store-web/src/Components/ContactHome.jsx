import { Card, Image, Text } from '@mantine/core';
import back from "../images/IMG_5698.jpg"
export default function ContactHome() {
  return (
    <div className="card-container">
      <Card
        shadow="sm"
        p="xl"
        component="a"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
      >
        <Card.Section>
          <Image
            src={back}
            height={160}
            alt="No way!"
          />
        </Card.Section>

        <Text weight={500} size="lg" mt="md">
          Still have Questions? Don't hesitate to contact us
        </Text>

        <Text mt="xs" color="dimmed" size="sm">
          Please click anywhere on this card to go to our contact page
        </Text>
      </Card>
    </div>
  );
}
