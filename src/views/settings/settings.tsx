import { Container, Main, PageLayout, TitleDecoration } from "components";
import { ViewSidebar, ViewHeader } from "views/components";

const Settings = () => {
	return (
		<PageLayout>
			<ViewHeader title="Settings" />
			<Container>
				<ViewSidebar />
				<Main>
					<TitleDecoration>
						<h2>Main Content</h2>
					</TitleDecoration>
				</Main>
			</Container>
		</PageLayout>
	);
};

export default Settings;
