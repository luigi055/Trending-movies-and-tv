import {
	Container,
	DesignH2,
	Main,
	PageLayout,
	TitleDecoration,
} from "components";
import { ViewSidebar, ViewHeader } from "views/_shared";

const Dashboard = () => (
	<PageLayout>
		<ViewHeader title="Dashboard" />
		<Container>
			<ViewSidebar />
			<Main>
				<TitleDecoration>
					<DesignH2 data-testid="dashboard__title">Secret Dashboard</DesignH2>
				</TitleDecoration>
			</Main>
		</Container>
	</PageLayout>
);

export default Dashboard;
