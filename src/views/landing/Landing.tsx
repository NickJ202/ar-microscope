import React from 'react';
import { connect } from 'react-redux';

import { Button } from 'components/Button';
import { Search } from 'components/Search';
import { ASSETS } from 'helpers/config';

import * as S from './styles';

export default function Landing(props: any) {
	const [searchTerm, setSearchTerm] = React.useState<string>('');

	function handleSearch(e: any) {
		if ((e.type === 'keydown' && e.key === 'Enter') || e.type === 'click') {
			if (searchTerm) {
                props.goToTx(searchTerm);
			}
		}
	}

	function handleClear() {
		setSearchTerm('');
	}

    const handlePaste = async () => {
        const text = await navigator.clipboard.readText();
        setSearchTerm(text);
      };
    

	return (
		<S.Wrapper>
			<S.Content>
				<S.LogoWrapper>
					<S.Logo src={ASSETS.logoCopy} />
				</S.LogoWrapper>
				<S.SearchWrapper>
					<Search
						value={searchTerm}
						handleChange={(term: string) => setSearchTerm(term)}
						handleSearch={(e: React.KeyboardEvent<HTMLInputElement>) => handleSearch(e)}
						handleClear={() => handleClear()}
						disabled={false}
						loading={false}
					/>
				</S.SearchWrapper>
                <S.ActionsWrapper>
                    <S.ActionWrapper>
                        <Button 
                            type={'alt2'}
                            label={'Paste From Clipboard'}
                            handlePress={handlePaste}
                            disabled={false}
                            noMinWidth
                        />
                    </S.ActionWrapper>
                    <S.ActionWrapper>
                        <Button 
                            type={'alt1'}
                            label={'Search'}
                            handlePress={(e: React.MouseEvent<HTMLInputElement>) => handleSearch(e)}
                            disabled={false}
                            noMinWidth
                        />
                    </S.ActionWrapper>
                </S.ActionsWrapper>
			</S.Content>
		</S.Wrapper>
	);
}

export const ConnectedLanding = connect(null, (dispatch) => ({
	goToTx: (tx: string) => dispatch({ type: 'TX', params: { tx } }),
}))(Landing);
