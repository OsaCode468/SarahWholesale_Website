import {
    createStyles,
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
  } from '@mantine/core';
  import { IconDeviceMobile, IconHammer, IconDeviceSim } from '@tabler/icons-react';
  import Header1 from './Header';
  import { FooterCentered } from './Footer';
  const mockdata = [
    {
      title: 'Phones And Acessories',
      description:
        'At our phone store, we pride ourselves on offering an extensive selection of the latest smartphones and a comprehensive range of accessories to enhance your mobile experience. From cutting-edge flagship models to budget-friendly options, our diverse inventory caters to all preferences and needs. Whether you\'re in search of a protective case, wireless charger, or screen protector, our curated collection of accessories is designed to complement your lifestyle and elevate your device\'s functionality. Our knowledgeable staff are dedicated to assisting you in finding the perfect phone and accessories, ensuring you leave with products that suit your style and tech requirements.',
      icon: IconDeviceMobile,
    },
    {
      title: 'Repair',
      description:
        'Welcome to our premier phone repair service, where we specialize in bringing your mobile devices back to life with precision and care. Our skilled technicians are equipped to handle a wide range of issues, from cracked screens and battery replacements to more complex software glitches and hardware malfunctions. We understand the importance of your phone in your daily life, which is why we\'re committed to providing quick, reliable, and affordable repair solutions. Using only high-quality parts and the latest repair techniques, we ensure your device returns to you in top-notch condition. Trust us to restore your phone\'s performance and extend its lifespan, all while offering exceptional customer service and support.',
      icon: IconHammer,
    },
    {
      title: 'Sim Activation',
      description: 'At our store, we offer a hassle-free SIM activation service that seamlessly connects you to your network of choice. Whether you\'re switching to a new carrier or activating a new phone, our expert team is here to guide you through the process, ensuring a smooth transition. We handle everything from selecting the right plan to fit your needs, to configuring your device settings for optimal performance. Our goal is to get you up and running with your mobile service quickly and efficiently, so you can stay connected with what matters most.',
      icon: IconDeviceSim,
    },
  ];
  
  const useStyles = createStyles((theme) => ({
    title: {
      fontSize: 34,
      fontWeight: 900,
      [theme.fn.smallerThan('sm')]: {
        fontSize: 24,
      },
    },
  
    description: {
      maxWidth: 600,
      margin: 'auto',
  
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: theme.fn.primaryColor(),
        width: 45,
        height: 2,
        marginTop: theme.spacing.sm,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  
    card: {
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
    },
  
    cardTitle: {
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: theme.fn.primaryColor(),
        width: 45,
        height: 2,
        marginTop: theme.spacing.sm,
      },
    },
  }));
  
  export function Services() {
    const { classes, theme } = useStyles();
    const features = mockdata.map((feature) => (
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} p="xl">
        <feature.icon size={50} stroke={2} color={theme.fn.primaryColor()} />
        <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text size="sm" color="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Card>
    ));
    return (
      <Container size="lg" py="xl">
        <Group position="center">
          <Badge variant="filled" size="lg">
            Best company ever
          </Badge>
        </Group>
  
        <Title order={2} className={classes.title} align="center" mt="sm">
          Providing all the services you need for all your cell phone needs
        </Title>
  
        <Text color="dimmed" className={classes.description} align="center" mt="md">
          Look no further for quality repair, accessories, and sim activation.
        </Text>
  
        <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
          {features}
        </SimpleGrid>
      </Container>
    );
  }