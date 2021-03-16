import styled from 'styled-components';
import { ISubHeaderProps } from '../models/shopping-list-models';
import { Button } from 'react-bootstrap'
import { Title } from '../styled-components/styled-components';

const SubHeaderWrapper = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
background: lightGray;
`
const ButtonWrapper = styled(Button)`
 margin: 10px;
`
const SubHeader: React.FC<ISubHeaderProps> = ({ goBack, title, openForm }: ISubHeaderProps) => (
<SubHeaderWrapper>
    {goBack && <ButtonWrapper variant="primary" onClick={goBack}>Go Back</ButtonWrapper>}
    <Title>{title}</Title>
    {openForm && <ButtonWrapper variant="primary" onClick={openForm}>Add Item</ButtonWrapper>}
</SubHeaderWrapper>
)

export default SubHeader;