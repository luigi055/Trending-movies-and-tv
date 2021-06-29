import {
	Container,
	DesignH2,
	Main,
	PageLayout,
	TitleDecoration,
} from "components";
import { ViewSidebar, ViewHeader } from "views/_shared";

const Settings = () => (
	<PageLayout>
		<ViewHeader title="Settings" />
		<Container>
			<ViewSidebar />
			<Main>
				<TitleDecoration>
					<DesignH2 data-testid="settings__title">Settings</DesignH2>
				</TitleDecoration>
			</Main>
		</Container>
	</PageLayout>
);

export default Settings;
