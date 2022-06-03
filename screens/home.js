import { View, SafeAreaView } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import GlobalStyles from '../components/GlobalStyles'
import PlanetHeader from '../components/planet-header'
import { color } from '../theme/colors'

export default function Home() {
	return (
		<SafeAreaView style={{...GlobalStyles.droidSafeArea, backgroundColor:color.black}}>
			<PlanetHeader />
		</SafeAreaView>
	)
}