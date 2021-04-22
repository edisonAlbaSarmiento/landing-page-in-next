import React, { useState } from 'react';
import { ButtonContact, TitleComponet } from '../../atoms';
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
  ContainInfo,
} from './styles';
import Image from 'next/image';
import dataCases from '../../../utils/dataCases';

function ContentCases(params) {
  const [useItem, setItem] = useState(0);
  const [activeItem, setActiveItem] = useState(false);

  const changeState = (item, active) => {
    console.info('changeState', [item, active, useItem]);
    setActiveItem(active);
    setItem(item);
  };
  console.info('useItem', [useItem, dataCases]);
  return (
    <ContainerMolecule>
      <TitleComponet variant="title" fontSize="56px" color="#FFFFFF">
        Casos de estudio
      </TitleComponet>
      <TitleComponet
        variant="subtitle"
        fontSize="25px"
        marginText="revert"
        color="#FFFFFF"
      >
        Estos son algunos de nuestros casos de éxito
      </TitleComponet>
      <ContentMain>
        <ContentButtonCases>
          <ContentButton>
            <ButtonContact
              widthButton="80px"
              heightButtom="80px"
              backgroundColorButton="#FF2E4B"
              borderColor="#FFFF"
              isSelect={activeItem && useItem === 0}
              borderRadius="16px"
              onClick={() => changeState(0, true)}
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
              isSelect={activeItem && useItem === 1}
              onClick={() => changeState(1, true)}
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
              isSelect={activeItem && useItem === 2}
              onClick={() => changeState(2, true)}
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
                  <ContainInfo>
                    {item.iconImage}
                    <TitleComponet
                      variant="title"
                      fontSize="36px"
                      marginText="revert"
                      color="#FFFFFF"
                    >
                      {item.titleCase}
                    </TitleComponet>
                    <TitleComponet
                      variant="subtitle"
                      fontSize="25px"
                      marginText="revert"
                      color="#FFFFFF"
                    >
                      {item.subTitleCase}
                    </TitleComponet>
                  </ContainInfo>
                </ContentTextCases>
                <ContentImageCases>
                  <Image
                    src={`${item.imageCase}`}
                    alt="imageCase"
                    width={400}
                    height={350}
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
