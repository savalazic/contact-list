import React from 'react';
import { SectionList, Text } from 'react-native';

import Row from './Row';

const ContactsList = props => {
  const contactsByLetter = props.contacts.reduce((obj, contact) => {
    const firstLetter = contact.name[0].toUpperCase();
    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || []), contact],
    };
  }, {});

  const sections = Object.keys(contactsByLetter)
    .sort()
    .map(letter => ({
      title: letter,
      data: contactsByLetter[letter],
    }));

  return (
    <SectionList
      renderItem={obj => (
        <Row {...obj.item} onSelectContact={props.onSelectContact} />
      )}
      renderSectionHeader={obj => <Text>{obj.section.title}</Text>}
      sections={sections}
    />
  );
};

export default ContactsList;
