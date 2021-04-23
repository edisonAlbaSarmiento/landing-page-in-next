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
  ContentTextImage,
} from './styles';
import Image from 'next/image';
import dataCases from '../../../utils/dataCases';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

function ContentCases(params) {
  const [useItem, setItem] = useState(0);
  const [activeItem, setActiveItem] = useState(false);

  const changeState = (item, active) => {
    setActiveItem(active);
    setItem(item);
  };
  return (
    <Bounce left>
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
                isSelect={useItem === 0 && true}
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
            if (useItem === index) {
              return (
                <ContentTextImage>
                  <ContentTextCases>
                    <ContainInfo>
                      <Bounce left>
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
                      </Bounce>
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
                </ContentTextImage>
              );
            }
          })}
        </ContentMain>
      </ContainerMolecule>
    </Bounce>
  );
}

export default ContentCases;
