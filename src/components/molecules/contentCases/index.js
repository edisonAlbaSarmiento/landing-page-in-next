import React, { useState } from 'react';
import { Typography, ButtonContact } from '../../atoms';
import {
  IconCaseGrability,
  IconCaseChiper,
  IconCaseRappi,
} from '../../../static/icons';
import {
  ContainerMolecule,
  ContentButtonCases,
  ContentMain,
  ContentTextCases,
  ContentImageCases,
  ContentButton,
} from './styles';
import Image from 'next/image';
import dataCases from '../../../utils/dataCases';

function ContentCases(params) {
  const [useItem, setItem] = useState(0);

  console.info('useItem', [useItem, dataCases]);
  return (
    <ContainerMolecule>
      <Typography variant="header">Casos de estudio</Typography>
      <Typography variant="title">
        Estos son algunos de nuestros casos de éxito
      </Typography>

      <ContentMain>
        <ContentButtonCases>
          <ContentButton>
            <ButtonContact
              widthButton="80px"
              heightButtom="80px"
              backgroundColorButton="#FF2E4B"
              borderColor="#FFFF"
              isSelect
              borderRadius="16px"
              onClick={() => setItem(0)}
            >
              <IconCaseRappi />
            </ButtonContact>
          </ContentButton>
          <ContentButton>
            <ButtonContact
              widthButton="80px"
              heightButtom="80px"
              backgroundColorButton="#F80135"
              borderColor="#FFFF"
              borderRadius="16px"
              onClick={() => setItem(1)}
            >
              <IconCaseChiper />
            </ButtonContact>
          </ContentButton>
          <ContentButton>
            <ButtonContact
              widthButton="80px"
              heightButtom="80px"
              backgroundColorButton="#05CE7C"
              borderColor="#FFFF"
              borderRadius="16px"
              onClick={() => setItem(2)}
            >
              <IconCaseGrability />
            </ButtonContact>
          </ContentButton>
        </ContentButtonCases>
        {dataCases.map((item, index) => {
          console.info('item', [item, index]);
          if (useItem === index) {
            return (
              <>
                <ContentTextCases>
                  {item.iconImage}
                  <Typography variant="header">{item.titleCase}</Typography>
                  <Typography variant="title">{item.subTitleCase}</Typography>
                </ContentTextCases>
                <ContentImageCases>
                  <Image
                    src={`${item.imageCase}`}
                    alt="imageCase"
                    width={400}
                    height={400}
                  />
                </ContentImageCases>
              </>
            );
          }
        })}
      </ContentMain>
    </ContainerMolecule>
  );
}

export default ContentCases;
