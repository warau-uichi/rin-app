import Image from 'next/image'
import tw from 'twin.macro'
import styled from 'styled-components'
import localImage from '../public/images/rin_logo.jpg'

const Container = tw.div`relative -mx-8 -my-8`
const CopyRight = tw.p`text-xs w-full text-center pt-10`
const Content = tw.div`max-w-screen-xl mx-auto py-8 text-white flex flex-wrap bg-cyan items-center`
const Infomation = styled.div`
  ${tw `grow mx-8`}
  .action {
    ${tw`text-center inline-block w-full sm:w-48 py-4 mt-4 mb-8 xl:mb-4 font-semibold tracking-wide rounded hocus:outline-none focus:outline transition duration-300`}
  }
  .primaryAction {
    ${tw`bg-amber-300 text-white hover:bg-amber-400`}
  }
`
const FlexContainer = tw.div`flex items-center`

const logo = (
  <Image src={localImage} alt="琳 -rin- からだにやさしいサロン" />
)

const AddressContainer = styled.div`
  ${tw`grow`}
  img {${tw`w-36 mb-3`}}
`;
const address = (
  <>
    {logo}
    〒5330014<br />
    大阪市東淀川区豊新4-8-7 アザレア202<br />
  </>
);

const CircleContainer = tw.div`
  w-24 h-24 rounded-full
  inline-flex items-center justify-center
  bg-white text-gray-500 text-sm font-bold
`;
const access = (
  <>
    上新庄駅<br />
    徒歩7分
  </>
);

const primaryActionText = "予約する";
const primaryActionUrl = "https://beauty.hotpepper.jp/CSP/kr/reserve/?storeId=H000668420";

const OpeningHoursContainer = tw.div`border-x-0 border-y border-white pt-2`;
const OpeningHoursContent = styled.div`
  ${tw`mb-2 flex flex-wrap`}
  h4 {${tw`w-1/3`}}
  div {${tw`w-2/3 border-l border-white pl-2`}}
  dl {
    ${tw`flex flex-wrap`}
  }
  dt {${tw`w-1/3`}}
  .full {${tw`w-full`}}
  .text-xs {${tw`text-xs`}}
`;

const MapContainer = styled.div`
  ${tw`h-80 w-10/12 xl:w-3/5 pr-0 xl:pr-8 pt-8 xl:pt-0 my-0 mx-auto`}
  .map {
    ${tw`w-full h-full`}
  }
`;

const apiKey = process.env.MAPS_API_KEY;
const mapQuery = '&q=琳-rin-+からだにやさしいサロン+鍼灸・サイマティクス・美容';
const mapUrl = 'https://www.google.com/maps/embed/v1/place?key=' + apiKey + mapQuery;

const embededMap = (
  <>
    <iframe
      className='map'
      loading="lazy"
      allowfullscreen
      referrerpolicy="no-referrer-when-downgrade"
      src={mapUrl}>
    </iframe>
  </>
);

export default function Maps(){

  return (
    <Container>
      <Content>
        <Infomation>
          <FlexContainer>
            <AddressContainer>
              {address}
            </AddressContainer>
            <CircleContainer>
              {access}
            </CircleContainer>
          </FlexContainer>
          <a href={primaryActionUrl} className="action primaryAction" target="_blank" rel="noopener noreferrer">
            {primaryActionText}
          </a>
          <OpeningHoursContainer>
            <OpeningHoursContent>
              <h4>営業時間</h4>
              <div>
                <dl>
                  <dt>平日</dt>
                  <dd>10:00 〜 15:00</dd>
                </dl>
                <dl>
                  <dt>土日祝</dt>
                  <dd>10:00 〜 20:00</dd>
                </dl>
              </div>
            </OpeningHoursContent>
            <OpeningHoursContent>
              <h4>定休日</h4>
              <div>
                <dl>
                  <dt className='full'>不定休</dt>
                  <dd className='full'>
                    <span className='text-xs'>
                      ※LINEやInstagramなどでもお知らせいたします。
                    </span>
                  </dd>
                </dl>
              </div>
            </OpeningHoursContent>
          </OpeningHoursContainer>
        </Infomation>
        <MapContainer>
          {embededMap}
        </MapContainer>
        <CopyRight>© 琳-rin- からだにやさしいサロン, All Rights Reserved</CopyRight>
      </Content>
    </Container>
  );
};
